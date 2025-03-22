const express = require("express");
const router = express.Router();

router.get("/team-details", (req, res) => {
    res.render("team-details", { title: "Team Details | Fastrans" });
});

module.exports = router;
