const express = require('express')
const router = express.Router()

const {renderLoginPage} = require('../controllers/user')

router.get('/',renderLoginPage)


module.exports = router