var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser')
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
const User = require('./models/user').User

// router.get, router.post etc....

router.post('/api/postings', (req, res) => {
    // TODO: create a job posting
    res.sendStatus(200);
});

module.exports = router;