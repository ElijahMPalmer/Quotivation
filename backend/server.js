const express = require('express');
const app = express();
const path = require("path");
const { Pool } = require('pg');
require("dotenv").config();
const PORT = process.env.PORT;
app.use(express.json());

app.use(express.static("../build"));

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false,
    },
});

app.get('/quotes', (req, res) => {
    pool.query('SELECT * FROM quotes;', (err, result) => {
        res.set('Access-Control-Allow-Origin', '*');
        res.send(result.rows);
    })
})






app.listen(PORT, function() {
    console.log('Server is running on PORT: ' + PORT);
})