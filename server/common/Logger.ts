import winston = require('winston');
import {LoggerInstance} from 'winston';

export class Logger {
    logger: LoggerInstance;

    constructor() {
        console.log("Creating Logger");

        let dateFormatForLogger = require('dateformat');
        let formatTimeStamp = dateFormatForLogger(new Date(), "dd-mmm-yyyy hh:MM:ss.l");

        this.logger = new winston.Logger({
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

        console.log("Created Logger");
    }

    debug(message: string) {
        this.logger.debug(message);
    }

    info(message: string) {
        this.logger.info(message);
    }

    warn(message: string) {
        this.logger.warn(message);
    }

    error(message: string) {
        this.logger.error(message);
    }
}

