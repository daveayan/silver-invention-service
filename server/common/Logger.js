(function () {
    var winston = require('winston');
    var morgan = require("morgan");
    
    var formatTimeStamp;
    var logger;

    function setupLoggers() {
        var dateFormatForLogger = require('dateformat');
        formatTimeStamp = dateFormatForLogger(new Date(), "dd-mmm-yyyy hh:MM:ss.l");    

        console.log("Setting Up Loggers");
        logger = new winston.Logger({
            level: 'info',
            exitOnError: false,
            handleExceptions: true,
            json: true,
            transports: [
                new (winston.transports.Console)({
                    timestamp: formatTimeStamp,
                    handleExceptions: false,
                    json: false,
                    colorize: true
                })
            ]
        });
    }

    var loggingService = {
        debug: function(message) {
            logger.debug(message);
        },

        info: function(message) {
            logger.info(message);
        },

        warn: function(message) {
            logger.warn(message);
        },

        error: function(message) {
            logger.error(message);
        }
    }

    setupLoggers();
    module.exports = loggingService;
})();