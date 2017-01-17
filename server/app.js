(function () {
    'use strict';

    var express, app, server;

    function setupExpress() {
        express = require('express');
        app = express();
        app.set('view engine', 'ejs');
    }

    function setupRoutes() {
        var teacherCrudController = require('./controller/TeacherCrudController');
        app.use('/teacher', teacherCrudController);
    }

    function startServer() {
        server = app.listen(5200, function () {
            console.log('app started on 5200');
        });
    }

    function stopServer() {
        server.close(function () {
            console.log('app stopped');
        });
    }

    setupExpress();
    setupRoutes();
    startServer();
})();
