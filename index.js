const express = require('express');
const port = process.env.port || 8000;
const app = express();

app.get('/', (req,res) => {
    res.send("Hello Heroku!");
});

app.listen(port, ()=> {
    console.log('The App is up and running!');
});

module.exports = app;
