var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create runner Schema and Model
const RunnerSchema = new Schema({
    name:{
        type: String,
        required: [true, 'Name field is required']
    },
    active:{
        type: String
    }
});

const Runner = mongoose.model('runner', RunnerSchema);

module.export Runner;
