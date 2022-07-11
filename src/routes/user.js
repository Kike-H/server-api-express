const { Router } = require('express');

const users = [{id: 1, name: 'John'}, {id: 2, name: 'Jack'}];

const user = Router();

user.get('/', (req, res) => {
    res.send(users)
});


module.exports = user;