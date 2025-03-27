const express = require("express");
const router = express.Router();
const faqs = require("../columns/faqs");
const services = require("../columns/services");

router.get("/faq", (req, res) => {
    res.render("faq", {
        title: "FAQ | Agata Kargo Utama",
        faqs,
        services,
        pageTitle: "FAQ",
        parentPage: null, // There is no parent page on the main page
    });
});

module.exports = router;
