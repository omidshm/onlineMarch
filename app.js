/**
 * Required External Modules */

const express = require('express');
const path = require("path");

// App Variables 

const app = express();

let visitCount = 0;
let Slogans = new Array(20).fill(0);

/**
 *  App Configuration */

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

/**
 * Routes Definitions */


app.get('/', (req, res) => {
    visitCount++;
    res.render("index", { title: "خانه", visitors: visitCount });
});

app.get('/:SloganNum', (req, res) => {
    Slogans[req.params.SloganNum]++;
    res.send(`<b>counted</b> ${Slogans[req.params.SloganNum]} Slogan`);
});

app.post('/Slogans', (req, res) => {
    Slogans[req.params.SloganNum]++;

    // parameters = SloganNum
})

app.use((req, res, next) => {
    res.status(404).send("با عرض پوزش چنین صفحه ای موجود نیست");
});

app.listen(3000, () => {
    console.log('your app listening on port 3000.');
});

/**
 * Server Activation */