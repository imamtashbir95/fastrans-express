const express = require("express");
const router = express.Router();
const services = require("../columns/services");

router.get("/pricing", (req, res) => {
    res.render("pricing", {
        title: "Pricing | Agata Kargo Utama",
        services,
        pageTitle: "Pricing",
        parentPage: null, // There is no parent page on the main page
    });
});

module.exports = router;
