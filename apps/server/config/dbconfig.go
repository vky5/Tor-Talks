package dbconfig

import (
	"fmt"
	"log"
	"os"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)


var DB *gorm.DB // global variable to store the database connection

func ConnectDB(){
	connectionString := os.Getenv("DATABASE_URL")

	if connectionString==""{
		connectionString = "postgres://vky5:passwd@localhost:5432/test"
	}

	var err error

	DB, err = gorm.Open(postgres.Open(connectionString), &gorm.Config{})

	if err!=nil{
		log.Fatalf("Error connecting to the database: %v", err)
	}

	//printing the connection
	fmt.Println("Database connected successfully")
}