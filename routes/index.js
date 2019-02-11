const express = require('express');
const router = express.Router();
const AWS = require('aws-sdk');
const SwiftClient = require('openstack-swift-client');
const listObjectes=require('./listObjects');
const listObjectBucketDestination= require('./BucketDes');
const synchronize  = require ('./sync');

const synchronizeAll  = require ('./syncAll');
/* GET home page. */
router.get('/', function (req, res) {
  res.send('Hello');
});

router.post('/ListAllBucketSourceObjects',listObjectes );

router.post('/ListBucketDestinationObject',listObjectBucketDestination );

router.post('/sync',synchronize );


router.post('/syncALL',synchronizeAll );
module.exports = router;
