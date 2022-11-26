const express = require('express')
const router = express.Router();
const home = require('../api/controllers/home')

router.get('/', home.homePage)
router.post('/', home.postStatus)
// router.post('/upload', home.postImage)
module.exports = router;
