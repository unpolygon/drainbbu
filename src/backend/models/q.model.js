const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const QSchema = new Schema({
    date: {type: String, require: true},
    time: {type: String, require: true},
    value: {type: Number, require: true}
});

// QSchema.index({date: date});

const Q = mongoose.model('QGraph', QSchema,'QGraph');

module.exports = Q;