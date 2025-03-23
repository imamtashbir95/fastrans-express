const express = require("express");
const router = express.Router();
const services = require("../columns/services");

router.get("/about", (req, res) => {
    res.render("about", {
        title: "About | Agata Kargo Utama",
        services,
        pageTitle: "About",
        parentPage: null, // There is no parent page on the main page
    });
});

module.exports = router;
