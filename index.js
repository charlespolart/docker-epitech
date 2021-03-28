const express = require('express')
const mysql = require('mysql');

const app = express()
const port = 3000
const connection = mysql.createConnection({
    host: "172.18.0.2",
    port: 3306,
    user: "root",
    password: "root",
    database: "docker_epitech"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("Database connected!");
    connection.query("SELECT * FROM texts", (err, resQuery) => {
        if (err) {
            console.log(err.message);
        }
        else {
            app.get('/database', (req, res) => {
                res.send(resQuery);
            });
        }
    });
});

app.get('/', (req, res) => {
    res.send('Hello World! ' + 'Environment: ' + process.env.NODE_ENV)
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
});
