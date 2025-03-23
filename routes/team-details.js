const express = require("express");
const router = express.Router();
const services = require("../columns/services");

router.get("/team-details", (req, res) => {
    res.render("team-details", { title: "Team Details | Agata Kargo Utama", services });
});

module.exports = router;
