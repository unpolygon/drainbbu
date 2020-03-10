const router = require('express').Router();
let RfGraph = require('../models/rf.model');

router.route('/').get((req, res) => {
  RfGraph.find()
    .then(rf => res.json(rf))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const count = Number(req.body.count);
  const date = req.body.date;
  const time = req.body.time;
  const value = Number(req.body.value);

  const newRfGraph = new RfGraph({
    count,
    date,
    time,
    value
  });

  newRfGraph.save()
  .then(() => res.json('RfGraph added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;