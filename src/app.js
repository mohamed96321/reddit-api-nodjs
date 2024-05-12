const express = require('express');
const app = express();
const { dbConnection } = require('./config/database');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes

// 404 Error handling middleware

// Error handling middleware

// Database connection test
dbConnection();

module.exports = app;
