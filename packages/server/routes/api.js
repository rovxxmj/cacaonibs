const express = require("express");

const Chat = require("../models/chat");
const Room = require("../models/room");
const User = require("../models/user");
const Image = require("../models/image");
const Mention = require("../models/mention");

const router = express.Router();

// 채팅 목록

router.get("/rooms/:roomId/chats", async (req, res) => {
  return res.json({ room: req.params.roomId });
  // try {
  //   const chats = await Chat.findAll({where: {
  //
  //     }})
  // }
});

module.exports = router;
