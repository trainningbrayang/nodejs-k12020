var express = require('express');
var router = express.Router();
var userCollection = require('../model/userdata');
const { use } = require('./info');

router.route("/CreateUser").post(createUser);
router.route("/UpdateUser").post(UpdateUser);
router.route("/GetUser").post(GetUser);
async function createUser(req, res) {

    await userCollection.create({ username: req.body.username, pass: req.body.pass });
    res.send("Create ok: " + req.body.username);

}
async function UpdateUser(req, res) {

    const user = await userCollection.findOne({ "username": req.body.username })

    if (user) {
        user.age = req.body.age;
        user.save();
        res.status(200).send("set age ok");
    }
    else {
        res.status(400).send("user not found");
    }

}
async function GetUser(req, res) {
    var username = req.header("username")
    const user = await userCollection.findOne({ "username": username })

    if (user) {
        //res.status(200).send(user);
        res.status(200).json(user);
    }
    else {
        res.status(400).send("user not found");
    }

}
module.exports = router;