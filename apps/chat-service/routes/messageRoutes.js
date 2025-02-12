const express = require("express");

const router = express.Router()

router
    .route("/").post()
    .route("/:chatId").get()

module.exports = router;