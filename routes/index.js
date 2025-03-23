const express = require("express");
const router = express.Router();
const services = require("../columns/services");
const projects = require("../columns/projects");

router.get("/", (req, res) => {
    res.render("index", { title: "Agata Kargo Utama", projects, services });
});

module.exports = router;
