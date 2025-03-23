const express = require("express");
const router = express.Router();
const services = require("../columns/services");

router.get("/blog", (req, res) => {
    res.render("blog", {
        title: "Blog | Agata Kargo Utama",
        services,
        pageTitle: "Blog",
        parentPage: null, // There is no parent page on the main page
    });
});

module.exports = router;
