import * as express from 'express';
import { Router } from 'express';

import { Logger } from './common/Logger';
import { TeacherController } from './controller/TeacherController';

export class AppServer {
    logger = new Logger();
    public app: express.Application;

    constructor() {}

    public static bootstrap(): AppServer {
        return new AppServer();
    }

    public setupAndRun() {
        this.app = express();
        this.setupRoutes();
        this.runServer();
    }

    private setupRoutes() {
        this.logger.info('SERVER: Start Creating Routes');
        let router: express.Router;
        
        router = express.Router();
        router.use('/teacher', new TeacherController().router );
        
        this.app.use(router);

        this.logger.info('SERVER: Done Creating Routes');
    }

    private runServer() {
        this.logger.info('SERVER: Start Running Server');
        this.app.listen(5001);
        this.logger.info('SERVER: Done Running Server');
    }
}

AppServer.bootstrap().setupAndRun();