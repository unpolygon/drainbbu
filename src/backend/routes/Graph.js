const router = require('express').Router();
let Graph = require('../models/Graph.model');

router.route('/').get((req, res) => {
  let month = req.query.month;
  Graph.find({ month:month})
    .then(graph => res.json(graph))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const count= Number(req.body.count);
  const  date= req.body.date;
  const  month= Number(req.body.month);
  const  year=Number(req.body.year);
  const   time= req.body.time;
  const rfValue= Number(req.body.rfValue);
  const  qValue= Number(req.body.qValue);
  const  wlValue=  Number(req.body.wlValue);

  const newGraph = new Graph({
    count,
    date,
    month,
    year,
    time,
    rfValue,
    qValue,
    wlValue
  });

  newGraph.save()
  .then(() => res.json('Graph added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;