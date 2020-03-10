const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const WlSchema = new Schema({
    date: {type: String, require: true},
    time: {type: String, require: true},
    value: {type: Number, require: true}
});

const Wl = mongoose.model('WlGraph', WlSchema,'WlGraph');

module.exports = Wl;