import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// App Config
// Create instance of our server
const app = express();
dotenv.config();
// Port app is run on
const port = process.env.PORT || 8001
const connection_url = CONNECTION_URL


// Middlewares

// Database configuration

mongoose.connect(connection_url, {
    useNewUrlParse: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

// API Endpoints
app.get("/", (req, res ) => res.status(200).send('Golden Hour whoo'));

// Listener
app.listen(port, () => console.log(`listening on localhost: ${port}`));