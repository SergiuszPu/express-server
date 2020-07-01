const express = require('express');
const router = express.Router();
const db3 = require('./../db3');


router.route('/seats').get((req, res) => {
    res.json(db3.seats);
  });

  router.route('/seats/:id').get((req, res) => {
    res.json(db.seats);
  });

  router.route('/seats').post((req, res) => {
    res.json({massage: 'ok'});
  });

  router.route('/seats/:id').put((req, res) => {
    res.json({massage: 'ok'});
  });

  router.route('/seats/:id').delete((req, res) => {
    res.json({massage: 'ok'});
  });



module.exports = router;