var express = require('express');
var router = express.Router();
var Runner = require('../models/runner');


/* get list of runners from the database */
router.get('/all_runners', function(req, res, next) {
    Runner.find({}).then(function(runners){
        res.send(runners);
    });
});

/* get list of runners from the database */
router.get('/runners/:id', function(req, res, next) {
    Runner.find({_id: req.params.id}).then(function(runners){
        res.send(runners);
    });
});

/* add a runner to the database */
router.post('/runners', function(req, res, next) {
    Runner.create(req.body).then(function(runner){
        res.send(runner);
    });
});

/* update a runner in the database */
router.put('/runners/:id', function(req, res, next) {
    Runner.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        Runner.findOne({_id: req.params.id}).then(function(runner){
            res.send(runner);
        });
    });
});

/* delete a runner from the database */
router.delete('/runners/:id', function(req, res, next) {
    Runner.findByIdAndRemove({_id: req.params.id}).then(function(runner){
        res.send(runner);
    });

});

module.exports = router;
