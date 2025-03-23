const express = require("express");
const router = express.Router();
const services = require("../columns/services");

router.get("/contact", (req, res) => {
    res.render("contact", {
        title: "Contact | Agata Kargo Utama",
        services,
        pageTitle: "Contact",
        parentPage: null, // There is no parent page on the main page
    });
});

module.exports = router;
