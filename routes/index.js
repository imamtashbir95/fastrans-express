const express = require("express");
const router = express.Router();
const faqs = require("../columns/faqs");
const projects = require("../columns/projects");
const services = require("../columns/services");
const testimonials = require("../columns/testimonials");

router.get("/", (req, res) => {
    res.render("index", { title: "Agata Kargo Utama", faqs, projects, services, testimonials });
});

module.exports = router;
