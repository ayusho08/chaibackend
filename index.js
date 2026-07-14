require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;
const ayush = {
  "name": "Jane Doe",
  "age": 28,
  "is_employee": true,
  "skills": ["Python", "JSON", "Data Analysis"],
  "address": {
    "city": "Patna",
    
  },
  "manager": null
};

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
app.get('/github', (req, res) => {
    res.json(ayush);
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
