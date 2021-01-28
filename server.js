import express from 'express';
import mongoose from 'mongoose';

// App Config
// Create instance of our server
const app = express();
// Port app is run on
const port = process.env.PORT || 8001

// Middlewares

// Database configuration

// API Endpoints
app.get("/", (req, res ) => res.status(200).send('Golden Hour whoo'));

// Listener
app.listen(port, () => console.log(`listening on localhost: ${port}`));