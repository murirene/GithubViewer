'use strict';
import express from 'express';

let app = express();

app.use(express.static('build'));
app.use(express.static('src/public'));

const PORT = 3000;
let f = () => {
    console.log(`Listening to ${PORT}`);
}

app.listen(3000, f);