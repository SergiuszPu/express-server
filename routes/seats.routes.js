const express = require('express');
const router = express.Router();
const db3 = require('./../db3');


router.route('/seats').get((req, res) => {
    res.json(db3.seats);
  });


module.exports = router;