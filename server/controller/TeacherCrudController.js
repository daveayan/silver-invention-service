(function() {
    var express, router;

    function init() {
        express = require('express');
        router = express.Router();
    }

    function setupRoutes() {
        router.get('/:uuid', function (req, res, next) {
            console.log('In TeacherCrudController :: get ' + req.params.uuid);
            res.send('Hello ' + req.params.uuid);
            res.sendStatus(200);
        });
        router.post('/:uuid', function (req, res, next) {
            console.log('In TeacherCrudController :: post ' + req.params.uuid);
        });
        router.delete('/:uuid', function (req, res, next) {
            console.log('In TeacherCrudController :: delete ' + req.params.uuid);
        });
    }

    init();
    setupRoutes();
    module.exports = router;
})();