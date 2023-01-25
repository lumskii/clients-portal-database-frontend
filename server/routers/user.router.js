const express = require('express');
const { route } = require('./client.router');
const router = express.Router();

router.all('/', (req, res, next) => {
  // res.json({ message: "return from user router" });

  next();
});

router.post('/', (req, res) => {
  console.log(req.body);
  res.json(req.body);
});

module.exports = router;
