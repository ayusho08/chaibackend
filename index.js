require('dotenv').config();

console.log("Hello, World!");
console.log("This is a sample Node.js application.");


const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/twitter', (req, res) => {
    res.send('ayush.twitter');
})
app.get('/login', (req, res) => {
    res.send('ayush login kr bhai');
})

app.get('/youtube', (req, res) => {
    res.send('<h1>ayush youtube</h1>');
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
