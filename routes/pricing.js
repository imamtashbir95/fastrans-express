const express = require("express");
const router = express.Router();

router.get("/pricing", (req, res) => {
    res.render("pricing", {
        title: "Pricing | Fastrans",
        pageTitle: "Pricing",
        parentPage: null, // There is no parent page on the main page
    });
});

module.exports = router;
