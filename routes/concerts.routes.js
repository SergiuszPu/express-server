const express = require('express');
const router = express.Router();
const db2 = require('./../db2');


router.route('/concerts').get((req, res) => {
    res.json(db2.concerts);
  });

  router.route('/concerts/:id').get((req, res) => {
    res.json(db2.concerts);
  });

  router.route('/concerts').post((req, res) => {
    res.json({massage: 'ok'});
  });

  router.route('/concerts/:id').put((req, res) => {
    res.json({massage: 'ok'});
  });

  router.route('/concerts/:id').delete((req, res) => {
    res.json({massage: 'ok'});
  });


module.exports = router;