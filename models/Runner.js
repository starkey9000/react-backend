var mongoose= require('mongoose');

var RunnerSchema = new mongoose.Schema({
    name: { type:String, default: ''},
    hometown: { type:String, default: ''},
})

module.exports = mongoose.model('RunnerSchema', RunnerSchema);
