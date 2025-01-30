package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/joho/godotenv"
	dbconfig "github.com/vky5/tortalks/config"
)

func main() {

	// loading environment variables from .env file
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}

	dbconfig.ConnectDB()

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) { // passing callback, call by reference
		// in JS req, res objects are passed by reference making it /easier to directly manipulate
		// in go the responsewriter is not actually response object but an interface of how future response might look
		// in go no need for dereference operator done automatically
		fmt.Println("interface : ", w)
		// fmt.Println("Request headers: ", r.Header)
		// fmt.Println("Request type: ", r.Method)
		fmt.Fprintf(w, "Welcome to TorTalks Server!")

	})


	fmt.Println("Starting the server on :8080...")
	log.Fatal(http.ListenAndServe(":8080", nil))
}
