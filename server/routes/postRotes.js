const router = require('express').Router()
const postContoller = require('../controllers/postController')
router.post('/new-post', postContoller.createNewPost)

module.exports = router