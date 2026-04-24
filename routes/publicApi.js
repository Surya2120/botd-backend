const express = require("express");

const router = express.Router();

router.get("/videos", (req, res) => {
  return res.json([
    {
      id: "1",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
      contestantName: "BOTD Demo",
      thumbnail: "https://via.placeholder.com/300"
    }
  ]);
});

router.get("/contestants", (req, res) => {
  return res.json([
    {
      id: "1",
      name: "BOTD Demo",
      votes: 0,
      thumbnail: "https://via.placeholder.com/300"
    }
  ]);
});

router.post("/register", (req, res) => {
  return res.json({ success: true, message: "Registered successfully" });
});

router.post("/vote", (req, res) => {
  return res.json({ success: true, message: "Vote recorded" });
});

module.exports = router;

