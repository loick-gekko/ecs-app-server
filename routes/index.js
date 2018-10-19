var express = require('express');
var router = express.Router();
var AwsS3 = require ('aws-sdk/clients/s3');
const s3 = new AwsS3 ();
/* GET home page. */
router.get('/', function (req, res) {
  res.json({ success: true, data: process.env });
  console.log('p.env', process.env)

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
router.get('/listAllBucket', (req, res) => {
  /*
   console.log('p.env',process.env.USER)
 s3.listBuckets(function(err,data){
   if(err){console.log ('err:',err)}
   else{
     let buckets = data.Buckets;
     console.log("buckets",data.Buckets)
     // bucket.name ,
     res.json({ success: true, data: buckets}); 
   }
 })*/
  res.json({ success: true })
})
router.post('/sendFile', (req, res) => {
  console.log(req.body)
  res.json({ success: true })
  s3.putObject({ Bucket: req.bucketName, key: 'key', Body: file }, (err, data) => {

  })
})
router.post('/listAllObject', (req, res) => {
// console.log(req.body.bucketName)
let params={
  
    accessKeyId: req.body.username, // Ton username
    secretAccessKey: req.body.secretKey, // ta secretKey 
    region: 'Standard',
  
  Bucket:req.body.bucketName,
  
}
// console.log('params',params)
s3.listObjectsV2(params,(err,data)=>{
  if(err){res.json({success:false,params:params,data:err})}
  if(data){res.json({success:true,params:params,data:data})}
})


})
module.exports = router;
