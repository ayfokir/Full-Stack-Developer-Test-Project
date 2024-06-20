const express = require('express');
const router = express.Router();

const createRouter = require('./add-song'); // Ensure the path is correct

// Use the add-song router
router.use( createRouter); // Namespace the route (optional)

module.exports = router; // Ensure the router is exported correctly
