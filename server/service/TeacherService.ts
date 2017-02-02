import { Router, Request, Response, NextFunction } from 'express';
import { UUID } from 'uuid';
import { Logger } from '../common/Logger';

export class TeacherService {
    logger: Logger;

    constructor() {
        this.logger = new Logger();
    }

    public async get(uuid: UUID) : UUID {
        this.logger.info('TeacherService:: Start get');
        let testData;

        if(uuid === '12345') {
            testData = {
                uuid: uuid,
                message: "Foo"
            }
        } else {
            testData = {
                uuid: uuid,
                message: "Bar"
            }
        }

        this.logger.info('TeacherService:: Done get');        
        return testData;
    }
}
