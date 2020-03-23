const express = require('express');
const router = express.Router();
const multer = require('multer');
const { cloudinary, storage } = require('../cloudinary');
const upload = multer({storage});
const { AsyncErrorHandler } = require('../middleware');
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
router.get('/new', postNew);

/* POST posts create /posts. */
router.post('/', upload.array('images', 4), AsyncErrorHandler(postCreate));

/* GET posts show /posts/:id. */
router.get('/:id', AsyncErrorHandler(postShow));

/* GET posts edit /posts/:id/edit. */
router.get('/:id/edit', AsyncErrorHandler(postEdit));

/* PUT posts update /posts/:id. */
router.put('/:id', upload.array('images', 4), AsyncErrorHandler(postUpdate));

/* DELETE posts destroy /posts/:id. */
router.delete('/:id', AsyncErrorHandler(postDestroy));

module.exports = router;