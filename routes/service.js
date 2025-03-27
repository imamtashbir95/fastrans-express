const express = require("express");
const router = express.Router();
const faqs = require("../columns/faqs");
const services = require("../columns/services");
const projects = require("../columns/projects");

router.get("/service", (req, res) => {
    const page = parseInt(req.query.page) || 1; // Default to page 1 if no page query parameter is provided
    const itemsPerPage = 8; // Number of items to display per page
    const totalItems = services.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    // Count index to slice the array
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedServices = services.slice(startIndex, endIndex);

    res.render("service", {
        title: "Services | Agata Kargo Utama",
        faqs,
        projects,
        services: paginatedServices,
        currentPage: page,
        totalPages: totalPages,
        pageTitle: "Services",
        parentPage: null, // There is no parent page on the main page
    });
});

router.get("/service/:slug", (req, res) => {
    const service = services.find((s) => s.slug === req.params.slug);
    if (!service) {
        return res.status(404).send("Service not found");
    }
    res.render("service-details", {
        title: `${service.name} | Agata Kargo Utama`,
        services,
        service, // `service` object to access overview in EJS
        pageTitle: service.name,
        parentPage: "Service",
    });
});

module.exports = router;
