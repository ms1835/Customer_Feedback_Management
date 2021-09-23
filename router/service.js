const express = require('express')
const { renderServicePage,displayReviews } = require('../controllers/service')
const router = express.Router()

// router.get('/',renderServicePage)
router.get('/',displayReviews)

module.exports = router