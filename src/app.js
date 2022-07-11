const express = require('express');

const port = 8000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello, world!');
})

app.listen(port, () => {
    console.log(`\nServer is running on: http://localhost:${port}`);
})