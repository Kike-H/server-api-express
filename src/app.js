const express = require('express');
const user = require('./routes/user');

const port = 8000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Main rote
app.get('/', (req, res) => {
    res.send('Hello, world!');
});

//Users Routes
app.use('/user', user);

app.listen(port, () => {
    console.log(`\nServer is running on: http://localhost:${port}`);
});