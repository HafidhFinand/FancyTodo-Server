const express = require('express');
const router = express.Router();
const usersRoute = require('./usersRoute.js');
const todosRoute = require('./todosRoute.js');

router.use('/todos', todosRoute);
router.use('/users', usersRoute);
router.use('/', (req, res) => {res.send('Halaman Utama')});

module.exports = router;