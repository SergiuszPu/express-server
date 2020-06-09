const express = require('express');
const router = express.Router();
const db = require('./../db');

router.route('/testimonials').get((req, res) => {
    res.json(db.testimonials);
  });

  router.route('/testimonials/:id').get((req, res) => {
    res.json(db.testimonials);
  });

  router.route('/testimonials/random').get((req, res) => {
    res.json(db.testimonials);
  });

  router.route('/testimonials').post((req, res) => {
    res.json({massage: 'ok'});
  });

  router.route('/testimonials/:id').put((req, res) => {
    res.json({massage: 'ok'});
  });

  router.route('/testimonials/:id').delete((req, res) => {
    res.json({massage: 'ok'});
  });

module.exports = router;