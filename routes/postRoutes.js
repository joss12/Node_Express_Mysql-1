const express = require('express');
const router = express.Router();

const postControllers = require('../controllers/postControllers')

// @router
router
.route("/")
.get(postControllers.getAllPosts)
.post(postControllers.createNewPost);
router.route("/:id").get(postControllers.getPostById)


module.exports = router;