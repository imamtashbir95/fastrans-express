const express = require("express");
const router = express.Router();
const services = require("../columns/services");
const projects = require("../columns/projects");

router.get("/project", (req, res) => {
    res.render("project", {
        title: "Project | Agata Kargo Utama",
        projects,
        services,
        pageTitle: "Project",
        parentPage: null, // There is no parent page on the main page
    });
});

router.get("/project/:slug", (req, res) => {
    const project = projects.find((p) => p.slug === req.params.slug);
    if (!project) {
        return res.status(404).send("Project not found");
    }
    res.render("project-details", {
        title: `${project.name} | Agata Kargo Utama`,
        projects,
        services,
        currentProject: project,
        pageTitle: project.name,
        parentPage: "Project",
    });
});

module.exports = router;
