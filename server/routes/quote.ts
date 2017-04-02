
import { Router, Request, Response, NextFunction } from 'express';
import { Injectable } from 'injection-js';
import { DatastoreService } from '../services/datastore.service';
import 'reflect-metadata';

@Injectable()
export class Quote {
    uri = '/quote';
    router: Router = Router();
    self: Quote = this;

    constructor(private _datastore: DatastoreService) {
        this.router.get('/', this._get.bind(this));
        this.router.post('/', this._post.bind(this));
    }

    getRouter() {
        return this.router;
    }

    private _get(req: Request, res: Response, next: NextFunction) {
        res.send('no way');
    }

    private _post(req: Request, res: Response, next: NextFunction) {
        console.log(req.body);
        this._datastore.save(req.body)
            .then(() => {
                res.json({ message: 'ok' });
            })
            .catch((err) => {
                res.status(404).send(err);
            });
    }

}
