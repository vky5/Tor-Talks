package services

import (
	"fmt"
	"os"
	"os/exec"
)

func generateOnionURLs(username string) (string, error) {
	
	hiddenServiceDir := fmt.Sprintf("tor/%s", username) // TODO use environment varialbles to handle this

	cmd := exec.Command("tor", "--quiet", "--HiddenServiceDir", hiddenServiceDir, "--HiddenServicePort", "80 127.0.0.1:8080") // takes in input of all commands , as delemetior
	err := cmd.Run()

	if err!=nil{
		return "", fmt.Errorf("failed to start Tor hidden service for user %s: %v", username, err)
	}

	filePath := fmt.Sprintf("%s/hostname", hiddenServiceDir)

	file, err:= os.Open(filePath)

	if err!=nil{
		return "", fmt.Errorf("failed to read hidden service hostname for user %s: %v", username, err)
	}

	defer file.Close() // this will close the file only when the function finishes its execution thanks to defer

	var onionURL string
	_, err = fmt.Fscanf(file, "%s %d", &onionURL) // expects the pointer of the url to be modified with the output of the 
	// first output contains the number of items and when I say items it means the format specifies for example %s is the format specifiers and it reads strings delimited by whitespaces 
	// %d for integer and if u need to specify multiple add in same 

	if err!=nil{
		return "", fmt.Errorf("failed to parse onion address for user %s: %v", username, err)
	}
	println(onionURL)
	return onionURL, nil
}
