import { Router, Request, Response, NextFunction } from 'express';
import { Logger } from '../common/Logger';
import { TeacherService } from '../service/TeacherService';

export class TeacherController {
    logger: Logger;
    router: Router;
    teacherService: TeacherService;

    constructor() {
        this.logger = new Logger();
        this.router = Router();
        this.teacherService = new TeacherService();

        this.router.get('/:uuid', this.get.bind(this));
    }

    private async get(req: Request, res: Response, next: NextFunction) {
        this.logger.info('TeacherController:: Start get');
        let testData = await this.teacherService.get(req.params.uuid);
        res.send(testData);
        this.logger.info('TeacherController:: Done get');
    }
}
