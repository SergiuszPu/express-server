const express = require('express');
const router = express.Router();
const db2 = require('./../db2');


router.route('/concerts').get((req, res) => {
    res.json(db2.concerts);
  });


module.exports = router;