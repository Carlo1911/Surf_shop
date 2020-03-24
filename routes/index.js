const express = require('express');
const router = express.Router();
const {
  landingPage,
  getRegister,
  postRegister,
  getLogin,
  postLogin,
  getLogout,
  getProfile
} = require('../controllers');
const {
  asyncErrorHandler, isLoggedIn
} = require('../middleware');

/* GET home page. */
router.get('/', asyncErrorHandler(landingPage));

/* GET /register. */
router.get('/register', getRegister);

/* POST /register. */
router.post('/register', asyncErrorHandler(postRegister));

/* GET /login. */
router.get('/login', getLogin);

/* POST /login. */
router.post('/login', asyncErrorHandler(postLogin));

/* GET /logout. */
router.get('/logout', getLogout);

/* GET /profile. */
router.get('/profile', isLoggedIn, asyncErrorHandler(getProfile));

/* PUT /profile/:user_id. */
router.put('/profile/:user_id', (req, res, next) => {
  res.send('POST /profile/:user_id');
});

/* GET /forgot-password. */
router.get('/forgot-password', (req, res, next) => {
  res.send('GET /forgot-password');
});

/* PUT /forgot-password. */
router.put('/forgot-password', (req, res, next) => {
  res.send('PUT /forgot-password');
});

/* GET /reset-password. */
router.get('/reset-password/:token', (req, res, next) => {
  res.send('GET /reset-password/:token');
});

/* PUT /reset-password. */
router.put('/reset-password/:token', (req, res, next) => {
  res.send('PUT /reset-password/:token');
});

module.exports = router;