const express = require('express');
const router = express.Router();
const {
  errorHandler
} = require('../middleware');
const {
  getPosts,
  newPost,
  createPost
} = require('../controllers/posts');

/* GET posts index /posts. */
router.get('/', errorHandler(getPosts));

/* GET posts new /posts/new. */
router.get('/new', newPost);

/* POST posts create /posts. */
router.post('/', errorHandler(createPost));

/* GET posts show /posts/:id. */
router.get('/:id', (req, res, next) => {
  res.send('/posts/show');
});

/* GET posts edit /posts/:id/edit. */
router.get('/:id/edit', (req, res, next) => {
  res.send('/posts/edit');
});

/* PUT posts update /posts/:id. */
router.put('/:id', (req, res, next) => {
  res.send('/posts/update');
});

/* DELETE posts destroy /posts/:id. */
router.delete('/:id', (req, res, next) => {
  res.send('/posts/destroy');
});

module.exports = router;