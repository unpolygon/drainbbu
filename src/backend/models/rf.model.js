const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const RfSchema = new Schema({
    count: {type: Number, require: true},
    date: {type: String, require: true},
    time: {type: String, require: true},
    value: {type: Number, require: true}
});

const Rf = mongoose.model('RfGraph', RfSchema, 'Rfgraph');

module.exports = Rf;
