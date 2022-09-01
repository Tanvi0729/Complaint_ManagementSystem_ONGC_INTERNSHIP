const express = require("express");
const router = express.Router();

const title = "Electric Compliant";
const headerTitle = "Electric Compliant";

const itTitle = "IT Compliant";
const itHeaderTitle = "IT Compliant";

const mechTitle = "mechnical Compliant";
const mechHeaderTitle = "mechncal Compliant";

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/electric-complaint", (req, res) => {
  res.render("electric_complaint");
});

router.get("/electric-complaint-details", (req, res) => {
  res.render("electric_complaint_details", {
    title: title,
    headerTitle: headerTitle,
  });
});

router.get("/it-network-complaint", (req, res) => {
  res.render("it_network_complaint", {
    title: itTitle,
    headerTitle: itHeaderTitle,
  });
});

router.get("/mechnical-complaint", (req, res) => {
  res.render("mechnical_complaint", {
    title: mechTitle,
    headerTitle: mechHeaderTitle,
  });
});

module.exports = router;
