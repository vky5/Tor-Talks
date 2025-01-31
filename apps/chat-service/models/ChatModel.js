const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
  chat: {
    type: String,
  },

  timeStamp: {
    type: Date,
    default: Date.now(),
  },

  from: {
    type: mongoose.Schema.ObjectId,
    ref: "Users",
    required: [true, "Every message must have an owner"],
  },

  to: {
    type: mongoose.Schema.ObjectId,
    ref: "Users",
  },

  chatType: {
    type: String,
    enum: ["group", "private"],
    default: "private",
  },

  groupName: {
    type: String,
    required: function () {
      return this.chatType === "group";
    },
  },
});

const Chats = mongoose.model("Chats", chatSchema);

module.exports = Chats;
