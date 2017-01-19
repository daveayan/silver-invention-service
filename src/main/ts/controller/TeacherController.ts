import { Router, Request, Response, NextFunction } from 'express';
import { Logger } from '../common/Logger';

export class TeacherController {
    logger: Logger;
    router: Router

    constructor() {
        this.logger = new Logger();
        this.router = Router();

        this.router.get('/:uuid', this.get.bind(this));
    }

    private get(req: Request, res: Response, next: NextFunction) {
        this.logger.info("TeacherController:: Start get");
        let testData = {
            uuid: req.params.uuid
        }
        res.send(testData);
        this.logger.info("TeacherController:: Done get");
    }
}
