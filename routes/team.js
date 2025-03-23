const express = require("express");
const router = express.Router();
const services = require("../columns/services");

router.get("/team", (req, res) => {
    res.render("team", {
        title: "Team | Agata Kargo Utama",
        services,
        pageTitle: "Team",
        parentPage: null, // There is no parent page on the main page
    });
});

module.exports = router;
