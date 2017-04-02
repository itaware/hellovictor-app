import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as path from 'path';
import { Quote } from './routes/quote';
import { ReflectiveInjector, Injectable } from 'injection-js';
import { DatastoreService } from './services/datastore.service';


@Injectable()
export class Server {

    public app: express.Application;

    public static bootstrap(): Server {
        const injector = ReflectiveInjector.resolveAndCreate([
            Server,
            Quote,
            DatastoreService
        ]);
        return injector.get(Server);
    }

    constructor(quote: Quote) {
        this.app = express();
        this.config();
        this.app.use('/api' + quote.uri, quote.getRouter());
    }

    private config() {

        this.app.use(express.static(path.join(__dirname, '../dist')));
        this.app.use(bodyParser.json());

        this.app.use(bodyParser.urlencoded({
            extended: true
        }));

        this.app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
            err.status = 404;
            next(err);
        });

        //this.app.use(errorHandler());
    }

}
