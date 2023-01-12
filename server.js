const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config({ path: ".env" });
const port = process.env.PORT || 5000;
const Item = require('./routes/itemRoute');
const cors = require('cors');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ origin: true }));

//database connetction
require('./database');

app.use('/api/todo', Item);

const url = process.env.MONGO_URL || "error"
app.get('/', (req, res) => {
    res.status(200).send(`hello its working  ${url}`);
});
app.get('/hi', (req, res) => {
    res.status(200).send(`Say Hii to mongo url bsdk  ${url}`);
});
app.get('/hello', (req, res) => {
    res.status(200).send(`hello tera kya karoo mai  ${url}`);
});
app.get('/bye', (req, res) => {
    res.status(200).send(`baye baye  ${port}`);
});

app.listen(port, () => {
    console.log(`Your server is running on http://localhost:${port}`);
});