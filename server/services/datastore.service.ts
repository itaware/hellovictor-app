import * as Datastore from '@google-cloud/datastore';

export class DatastoreService {
    datastore: Datastore;

    constructor() {
        this.datastore = Datastore({
            projectId: 'hello-victor-163108'
        });
    }

    save(data) {
        const entity = {
            key: this.datastore.key('Quote'),
            data: this.toDatastore(data)
        };
        return this.datastore.save(entity);
    }

    query(key, operator, searchTerm) {
        const query = this.datastore.createQuery('Quote').filter(key, operator, searchTerm);
        return this.datastore.runQuery(query).then((results) => {
            return results[0].map((o) => this.fromDatastore(o));
        });
    }

    // Translates from Datastore's entity format to
    // the format expected by the application.
    //
    // Datastore format:
    //   {
    //     key: [kind, id],
    //     data: {
    //       property: value
    //     }
    //   }
    //
    // Application format:
    //   {
    //     id: id,
    //     property: value
    //   }
    fromDatastore(obj) {
        obj.data.id = obj.key.id;
        return obj.data;
    }

    // Translates from the application's format to the datastore's
    // extended entity property format. It also handles marking any
    // specified properties as non-indexed. Does not translate the key.
    //
    // Application format:
    //   {
    //     id: id,
    //     property: value,
    //     unindexedProperty: value
    //   }
    //
    // Datastore extended format:
    //   [
    //     {
    //       name: property,
    //       value: value
    //     },
    //     {
    //       name: unindexedProperty,
    //       value: value,
    //       excludeFromIndexes: true
    //     }
    //   ]
    toDatastore(obj, nonIndexed?) {
        nonIndexed = nonIndexed || [];
        const results = [];
        Object.keys(obj).forEach((k) => {
            if (obj[k] === undefined) {
                return;
            }
            results.push({
                name: k,
                value: obj[k],
                excludeFromIndexes: nonIndexed.indexOf(k) !== -1
            });
        });
        return results;
    }

    // test
    addTask(description) {
        const taskKey = this.datastore.key('Task');
        const entity = {
            key: taskKey,
            data: [
                {
                    name: 'created',
                    value: new Date().toJSON()
                },
                {
                    name: 'description',
                    value: description,
                    excludeFromIndexes: true
                },
                {
                    name: 'done',
                    value: false
                },
                {
                    name: 'habitation',
                    value: {
                        'floor': 1,
                        'display': 'test'
                    }
                }
            ]
        };

        return this.datastore.save(entity)
            .then(() => {
                console.log(`Task ${taskKey.id} created successfully.`);
                return taskKey;
            });
    }

    queryTask() {
        const query = this.datastore.createQuery('Task').filter('habitation.display', '=', 'test');
        this.datastore.runQuery(query).then((results) => {
            console.log(results);
            results.forEach((task) => console.log(task));
        });
    }

}
