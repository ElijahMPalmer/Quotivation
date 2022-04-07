const express = require('express');
const app = express();
const { Pool } = require('pg');
app.use(express.json());

app.use(express.static("public"));

const pool = new Pool({
    database: 'quotivation',
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






app.listen(3030, function() {
    console.log('Server is running on PORT: 3030')
})