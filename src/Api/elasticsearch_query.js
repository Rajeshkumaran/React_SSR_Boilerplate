import bodyParser from 'body-parser';
const cookieparser = require('cookie-parser');
const express = require('express');
var cors = require('cors');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(cors());
app.use(cookieparser());
var elasticsearch = require('elasticsearch');
var elasticsearch_client = new elasticsearch.Client({
  host: 'localhost:9200',
  log: 'trace'
});
elasticsearch_client.ping({
    // ping usually has a 3000ms timeout
    requestTimeout: 1000
  }, function (error) {
    if (error) {
      console.trace('elasticsearch cluster is down!');
    } else {
      console.log('All is well');
    }
  });

  async function test(){
//   const promise = await elasticsearch_client.create({
//     index: 'myindex',
//     type: 'mytype',
//     id: '2',
//     body: {
//       title: 'Test 2',
//       tags: ['y', 'z'],
//     }
//   });
  const { count } = await elasticsearch_client.count({index:'myindex'});

  console.log('Elasstic search promise : count ',count)
  }
  

  app.get('/',(req,res)=>{
      console.log('Elastic search running successfully ...')
      test();
      res.send('Done')
  })
  app.listen(3020,()=>console.log("Listening in port 3020"));


