const express = require('express');
const router = express.Router();
const multer = require('multer');
const { cloudinary, storage } = require('../cloudinary');
const upload = multer({storage});
const { AsyncErrorHandler, isLoggedIn, isAuthor } = require('../middleware');
const {
  postIndex,
  postNew,
  postCreate,
  postShow,
  postEdit,
  postUpdate,
  postDestroy
} = require('../controllers/posts');

/* GET posts index /posts. */
router.get('/', AsyncErrorHandler(postIndex));

/* GET posts new /posts/new. */
router.get('/new', isLoggedIn, postNew);

/* POST posts create /posts. */
router.post('/', isLoggedIn, upload.array('images', 4), AsyncErrorHandler(postCreate));

/* GET posts show /posts/:id. */
router.get('/:id', AsyncErrorHandler(postShow));

/* GET posts edit /posts/:id/edit. */
router.get('/:id/edit', isLoggedIn, AsyncErrorHandler(isAuthor), AsyncErrorHandler(postEdit));

/* PUT posts update /posts/:id. */
router.put('/:id', isLoggedIn, AsyncErrorHandler(isAuthor), upload.array('images', 4), AsyncErrorHandler(postUpdate));

/* DELETE posts destroy /posts/:id. */
router.delete('/:id', isLoggedIn, AsyncErrorHandler(isAuthor), AsyncErrorHandler(postDestroy));

module.exports = router;