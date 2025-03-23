const express = require("express");
const router = express.Router();
const services = require("../columns/services");

router.get("/blog-details", (req, res) => {
    res.render("blog-details", { title: "Blog Details | Agata Kargo Utama", services });
});

module.exports = router;