const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const GraphSchema = new Schema({
    count: {type: Number, require: true},
    date: {type: String, require: true},
    month: {type: Number, require: true},
    year:{type: Number, require: true},
    time: {type: String, require: true},
    rfValue: {type: Number, require: true},
    qValue: {type: Number, require: true},
    wlValue: {type: Number, require: true}
});

GraphSchema.index({count: 1,month: 1,year : 1});
const Graph = mongoose.model('Graph', GraphSchema, 'Graph');

module.exports = Graph;
