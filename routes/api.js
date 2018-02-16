var express = require('express');
var router = express.Router();


/* get list of runners from the database */
router.get('/runners', function(req, res) {
    res.send({type:'GET'})
});

/* add a runner to the database */
router.post('/runners', function(req, res) {
    console.log(req.body);
    res.send({
        type: 'POST',
        name: req.body.name,
        rank: req.body.rank
    })
});

/* update a runner in the database */
router.put('/runners/:id', function(req, res) {
    res.send({type:'PUT'})
});

/* delete a runner from the database */
router.delete('/runners/:id', function(req, res) {
    res.send({type:'DELETE'})
});

module.exports = router;
