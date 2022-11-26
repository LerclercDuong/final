const express = require('express')
const router = express.Router();
const authen = require('../api/controllers/authen')

router.get('/login', function(req, res) {
    res.render('login',{layout: 'layouts/login'})
})
router.post('/login',authen.login)



module.exports = router;
