const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3001;

// Set EJS as template engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Set `public` folder for static files
app.use(express.static(path.join(__dirname, "public")));

// Import routes
const indexRoutes = require("./routes/index");
const aboutRoutes = require("./routes/about");
// const blogRoutes = require("./routes/blog");
// const blogDetailsRoutes = require("./routes/blog-details");
// const comingSoonRoutes = require("./routes/coming-soon");
const contactRoutes = require("./routes/contact");
const faqRoutes = require("./routes/faq");
const pricingRoutes = require("./routes/pricing");
const projectRoutes = require("./routes/project");
const serviceRoutes = require("./routes/service");
// const teamRoutes = require("./routes/team");
// const teamDetailsRoutes = require("./routes/team-details");

app.use("/", indexRoutes);
app.use("/", aboutRoutes);
// app.use("/", blogRoutes);
// app.use("/", blogDetailsRoutes);
// app.use("/", comingSoonRoutes);
app.use("/", contactRoutes);
app.use("/", faqRoutes);
app.use("/", pricingRoutes);
app.use("/", projectRoutes);
app.use("/", serviceRoutes);
// app.use("/", teamRoutes);
// app.use("/", teamDetailsRoutes);

// Redirect all unknown routes to "/"
app.use((req, res) => {
    res.redirect("/");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
