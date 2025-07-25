const express = require("express");
const router = express.Router();
const User = require("../models/User");

// GET /api/user/:uid
router.get("/:uid", async (req, res) => {
  const user = await User.findOne({ uid: req.params.uid });
  if (!user) return res.status(404).json({ hasOnboarded: false });
  res.json(user);
});

// POST /api/user/profile
router.post("/profile", async (req, res) => {
  console.log("POST /profile hit");
  const { uid, skinType, concerns, budget, hasOnboarded } = req.body;

  try {
    const user = await User.findOneAndUpdate(
      { uid },
      { skinType, concerns, budget, hasOnboarded },
      { upsert: true, new: true }
    );
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: "Failed to save profile" });
  }
});

module.exports = router;
