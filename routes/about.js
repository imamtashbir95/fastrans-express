const express = require("express");
const router = express.Router();
const services = require("../columns/services");
const testimonials = require("../columns/testimonials");

router.get("/about", (req, res) => {
    res.render("about", {
        title: "About | Agata Kargo Utama",
        services,
        testimonials,
        pageTitle: "About",
        parentPage: null, // There is no parent page on the main page
    });
});

module.exports = router;
