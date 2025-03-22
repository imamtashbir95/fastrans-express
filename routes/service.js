const express = require("express");
const router = express.Router();

const services = [
    { name: "Road Freight", slug: "road-freight", image: "/img/service/ser4.2.jpg", icon: "flaticon-free-shipping" },
    { name: "Ocean Freight", slug: "ocean-freight", image: "/img/service/ser4.3.jpg", icon: "flaticon-boat" },
    { name: "Air Freight", slug: "air-freight", image: "/img/service/ser4.4.jpg", icon: "flaticon-plane" },
    {
        name: "Third Party Logistics",
        slug: "third-party-logistics",
        image: "/img/service/ser4.3.jpg",
        icon: "flaticon-free-shipping",
    },
    { name: "Smart Warehousing", slug: "smart-warehousing", image: "/img/service/ser4.jpg", icon: "flaticon-boat" },
    {
        name: "Industry Solutions",
        slug: "industry-solutions",
        image: "/img/service/ser4.2.jpg",
        icon: "flaticon-plane",
    },
    { name: "Custom Solutions", slug: "custom-solutions", image: "/img/service/ser4.3.jpg", icon: "flaticon-train" },
];

router.get("/service", (req, res) => {
    res.render("service", {
        title: "Services | Fastrans",
        services,
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
        title: `${service.name} | Fastrans`,
        pageTitle: service.name,
        parentPage: "Service",
    });
});

module.exports = router;
