'use strict';

const express = require('express');
const router = express.Router();
const Datastore = require('@google-cloud/datastore');

const datastore = Datastore({
    projectId: 'hello-victor-163108'
});

function addTask (description) {
  const taskKey = datastore.key('Task');
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

  return datastore.save(entity)
    .then(() => {
      console.log(`Task ${taskKey.id} created successfully.`);
      return taskKey;
    });
}

/* GET api listing. */
router.get('/', (req, res) => {
    //addTask('test');
    let query = datastore.createQuery('Task').filter('habitation.display', '=', 'test');
    datastore.runQuery(query).then((results) => {
        console.log(results);
        results.forEach((task) => console.log(task));
    })
  res.send('api works');
});

router.get('/quote', (req, res) => {
  res.send('no way');
})

router.post('/quote', (req, res) => {
    console.log(req.body);
    res.json({ message:  'ok'});
});

module.exports = router;