(function () {
    'use strict';

    var logger = require('./common/Logger.js');
    var express, app, server;

    function setupExpress() {
        express = require('express');
        app = express();
        app.set('view engine', 'ejs');
    }

    function setupRoutes() {
        logger.info("SERVER: Setting up Routes");
        var teacherCrudController = require('./controller/TeacherCrudController');
        app.use('/teacher', teacherCrudController);
        logger.info("SERVER: Done Setting up Routes");
    }

    function startServer() {
        logger.info('SERVER: Starting on port 5200');
        server = app.listen(5200, function () {
            logger.info('SERVER: Done Starting on port 5200');
        });
    }

    function stopServer() {
        logger.info('SERVER: Stopping on port 5200');
        server.close(function () {
            logger.info('SERVER: Done Stopping on port 5200');
        });
    }

    setupExpress();
    setupRoutes();
    startServer();
})();
