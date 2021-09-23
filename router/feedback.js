const express = require('express')
const {renderReviewPage, submitReview } = require('../controllers/feedback')
const router = express.Router()

router.get('/',renderReviewPage)
router.post('/query',submitReview)

module.exports = router