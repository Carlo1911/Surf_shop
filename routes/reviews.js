const express = require('express');
const router = express.Router({ mergeParams: true});

/* GET reviews index /posts/:id/reviews. */
router.get('/', (req, res, next)  => {
  res.send('/posts/:id/reviews');
});

/* POST reviews create /reviews. */
router.post('/', (req, res, next)  => {
  res.send('/reviews/create');
});

/* GET reviews edit /posts/:id/reviews/:review_id. */
router.get('/:review_id/edit', (req, res, next)  => {
  res.send('/posts/:id/reviews/edit');
});

/* PUT reviews update /posts/:id/reviews/:review_id. */
router.put('/:review_id', (req, res, next)  => {
  res.send('/posts/:id/reviews/update');
});

/* DELETE reviews destroy /posts/:id/reviews/:review_id. */
router.delete('/:review_id', (req, res, next)  => {
  res.send('/posts/:id/reviews/destroy');
});

module.exports = router;
