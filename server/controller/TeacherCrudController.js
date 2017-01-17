(function() {
    var logger = require('../common/Logger.js');
    var express = require('express');
    router = express.Router();

    function setupRoutes() {
        logger.info("TeacherCrudController: Setting Up Routes");
        router.get('/:uuid', function (req, res, next) {
            logger.info('TeacherCrudController: get ' + req.params.uuid);
            res.send('Hello ' + req.params.uuid);
        });
        router.post('/:uuid', function (req, res, next) {
            logger.info('TeacherCrudController: post ' + req.params.uuid);
        });
        router.delete('/:uuid', function (req, res, next) {
            logger.info('TeacherCrudController: delete ' + req.params.uuid);
        });
        logger.info("TeacherCrudController: Done Setting Up Routes");
    }

    setupRoutes();
    module.exports = router;
})();