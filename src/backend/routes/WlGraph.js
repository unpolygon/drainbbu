const router = require('express').Router();
let WlGraph = require('../models/wl.model');

// router.route('/').get((req,res) => {
//     WlGraph.find().then(wl => res.json(wl))
//     .catch(err => res.status(404).json('Error '+err));
// });

router.route('/').get((req,res) => {
    let dateFrom = req.query.dateFrom;
    console.log(dateFrom);
    WlGraph.find({date:{ $in: dateFrom}}).then(wl => res.json(wl))
    .catch(err => res.status(404).json('Wl Cant get' + err));
});

router.route('/add').post((req,res) => {
    const date = req.body.date;
    const time = req.body.time;
    const value = Number(req.body.value);

    const newWlGraph = new WlGraph({
        date,
        time,
        value
    });

    newWlGraph.save()
    .then(() => res.json('WLGraph Added'))
    .catch(err => res.status(400).json('Error '+err));
});

module.exports = router;