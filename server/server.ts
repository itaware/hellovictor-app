import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as path from 'path';
import { Quote } from './routes/quote';
import 'reflect-metadata';
import { ReflectiveInjector, Injectable } from '@angular/core';
import { DatastoreService } from './services/datastore.service';
import { enableProdMode } from '@angular/core';

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

    public universalConfig(ngUniversalEngine) {
        // universal
        enableProdMode();
        this.app.engine('html', ngUniversalEngine());
        this.app.set('view engine', 'html');
        // set default view directory
        this.app.set('views', 'dist');
        // handle requests for routes in the app.  ngExpressEngine does the rendering.
        this.app.get(['/', '/home', '/habitation', '/valuable-item'], (req, res) => {
            res.render('index', { req });
        });
    }

    private config() {

        this.app.get('*.*', express.static(path.join(__dirname, '..', 'dist')));

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
