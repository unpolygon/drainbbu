const router = require('express').Router();
let QGraph = require('../models/q.model');

router.route('/').get((req,res) => {
    QGraph.find().then(q => res.json(q))
    .catch(err => res.status(404).json('Error '+err));
});

router.route('/add').post((req,res) => {
    const date = req.body.date;
    const time = req.body.time;
    const value = Number(req.body.value);

    const newQGraph = new QGraph({
        date,
        time,
        value
    });

    newQGraph.save()
    .then(() => res.json('QGraph Added'))
    .catch(err => res.status(400).json('Error '+err));
});

module.exports = router;