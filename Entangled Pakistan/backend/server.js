//const express = require('express');
//const app = express();
//const path = require('path');

//app.use(express.static(path.join(__dirname, '../')));

//app.get('/', (req, res) => {
//    res.sendFile(path.join(__dirname, '../index.html'));
//});

//app.get('/workshops', (req, res) => {
//    res.sendFile(path.join(__dirname, '../workshops.html'));
//});

//app.get('/platforms', (req, res) => {
//    res.sendFile(path.join(__dirname, '../platforms.html'));
//});

//app.get('/qusim', (req, res) => {
//    res.sendFile(path.join(__dirname, '../qusim.html'));
//});

//app.get('/login', (req, res) => {
//    res.sendFile(path.join(__dirname, '../login.html'));
//});

//const PORT = process.env.PORT || 3000;
//app.listen(PORT, () => {
//    console.log(`Server is running on port ${PORT}`);
//});

const fs = require('fs');
const https = require('https');
const express = require('express');
const app = express();
const path = require('path');

// Read the certificate and key
const key = fs.readFileSync(path.join(__dirname, 'key.pem'));
const cert = fs.readFileSync(path.join(__dirname, 'cert.pem'));


app.use(express.static(path.join(__dirname, '../')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});

app.get('/platforms', (req, res) => {
    res.sendFile(path.join(__dirname, '../platforms.html'));
});

app.get('/workshops', (req, res) => {
    res.sendFile(path.join(__dirname, '../workshops.html'));
});

app.get('/qusim', (req, res) => {
    res.sendFile(path.join(__dirname, '../qusim.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../login.html'));
});

const PORT = process.env.PORT || 3000;

https.createServer({ key, cert }, app).listen(PORT, () => {
    console.log(`Server is running on https://localhost:${PORT}`);
});
