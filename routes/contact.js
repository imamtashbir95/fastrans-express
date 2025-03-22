const express = require("express");
const router = express.Router();

router.get("/contact", (req, res) => {
    res.render("contact", {
        title: "Contact | Fastrans",
        pageTitle: "Contact",
        parentPage: null, // There is no parent page on the main page
    });
});

module.exports = router;
