package models

import (
	"time"
)

type Addresses struct {
	ID       uint   `gorm:"primaryKey"`
	URL      string `gorm:"unique"`
	Username string `gorm:"unique"`
	CreatedAt time.Time
	IsExpired bool
}
