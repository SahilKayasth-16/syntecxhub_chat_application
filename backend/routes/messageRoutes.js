const express = require("express");

const { getMessages, saveMessages } = require("../controllers/messageController");

const router = express.Router();

router.get("/:room", getMessages);

router.post("/", saveMessages);

module.exports = router;