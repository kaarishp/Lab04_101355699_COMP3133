const express = require('express');
const router = express.Router();
const UserModel = require('../model/User');

//Route to get all users
//http://localhost:3000/users
router.get('/users', async (req, res) => {
    try {
      const users = await UserModel.find({});
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
});

//Post request to add a new user
//http://localhost:3000/users
router.post('/users', async (req, res) => {
    try {
        const newUser = await UserModel.create(req.body);
        res.status(201).json({
            status: 'success',
            data: {
                user: newUser
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        });
    }
});

module.exports = router;