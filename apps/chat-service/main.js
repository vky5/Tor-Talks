const express = require("express");

const app = express();

// importing error handler
const globalErrorHandler = require("./controllers/globalErrorHandler");

// importing routes
const messageRoutes = require("./routes/messageRoutes");

// seting up body parser
app.use(express.json());

app.use();
app.use("/api/v1/message", messageRoutes);

app.use(globalErrorHandler);

module.exports = app;
