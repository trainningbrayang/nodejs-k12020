var express = require('express');
var router = express.Router();

router.get('/Mess', function (req, res) {
    res.send('Hello World!')
});
router.post('/PostAge', (req, res) => {

    var age = req.body.age;
    console.log("age: " + age);
    res.send("age: " + age);
});
module.exports = router;