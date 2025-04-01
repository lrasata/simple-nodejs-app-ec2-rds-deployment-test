const express = require('express');
const router = express.Router();
const sequelize = require('../models/index.js');

router.get('/status', async (req, res) => {
    try {
        await sequelize
            .authenticate()
            .then(() => {
                console.log('Connection has been established successfully.\n')
            })
            .catch(err => {
                console.error('Unable to connect to the database:', err)
            })
        res.json({ message: 'Connection has been established successfully.' });
    } catch (error) {
        res.status(500).json({ message: 'Unable to connect to the database.', error });
    }
});

module.exports = router;