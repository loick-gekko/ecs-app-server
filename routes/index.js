var express = require('express');
var router = express.Router();
const AWS = require('aws-sdk');
const keyName = process.env.KEY
/* GET home page. */
router.get('/', function (req, res) {
  res.json({ success: true, data: 'data' });
  console.log('p.env',process.env)
});
/*
router.get('/:Backet', (req, res) => {
  let bucketName = req.params.Backet;
  // Create a promise on S3 service object
  var bucketPromise = new AWS.S3({ apiVersion: '2006-03-01' }).createBucket({ Bucket: bucketName }).promise();

// Handle promise fulfilled/rejected states
bucketPromise.then(
  function (data) {
    // Create params for putObject call
    var objectParams = { Bucket: bucketName, Key: keyName, Body: 'Hello World!' };
    // Create object upload promise
    var uploadPromise = new AWS.S3({ apiVersion: '2006-03-01' }).putObject(objectParams).promise();
    uploadPromise.then(
      function (data) {
        console.log("Successfully uploaded data to " + bucketName + "/" + keyName);
      });
  }).catch(
    function (err) {
      console.error(err, err.stack);
    });

  })*/
router.get('/listAllBucket',(req,res)=>{
  console.log('p.env',process.env.USER)
res.json({success:true})
})
router.post('/sendFile',(req,res)=>{
  console.log(req.body)
  res.json({success:true})
})
module.exports = router;
