const express = require('express');
const app = express();

let countAbout = 0;
let countMain = 0;

app.get('/', (req, res) => {
    countMain++;
    res.send(`<h1>Добро пожаловать! Просмотров: ${countMain} </h1><a href ="/about.html">Перейти на страницу обо мне</a>`);
});
app.get('/about.html', (req, res) => {
    countAbout++;
    res.send(`<h1>Добро пожаловать! Просмотров: ${countAbout}</h1><a href = "/">Перейти на главную страницу</a>`);
});

app.listen(3000);

