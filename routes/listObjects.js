const express = require('express');
const AWS = require('aws-sdk');


/**
 * get the data in the object Storge Bucket
 * 
 * route == '/ListAllBucketSourceObjects'
 * 
 * @param req ={ bucketName: string,
        username: string,
        url: string,
        secretKey: string
      }
 */
module.exports=(req,res)=>{
 //console.log('params:', req.body)
  // let uid = req.body.username
  // let secret = req.body.secretKey;
  // let viprDataNode = req.body.url;
  // let bucketName = req.body.bucketName;

  // let ep = new AWS.Endpoint(viprDataNode);

  // s3Client = new AWS.S3({
  //   endpoint: ep,
  //   signatureVersion: 'v2',
  //   accessKeyId: uid,
  //   secretAccessKey: secret,
  //   s3ForcePathStyle: true
  // });

  // s3Client.listObjects({ Bucket: bucketName }, (err, data) => {
  //   if (err) {
  //     console.log('err Source bucket:', err);
  //     res.json({ success: false, data: err, message: 'error parameter' })
  //   }
  //   if (data) {
  //     res.json({ success: true, data: data })
  //   }
  // })

  let data = {
    Contents: [{
        Etag: "dfqsf",
        Key: "file1name",
        LastModified: "dsfsdfdsf",
        Size: 46,
       
    },
    {
        Etag: "dfqsf",
        Key: "file2name",
        LastModified: "dsfsdfdsf",
        LastModified: "dsfsdfdsf",
        Size: 44,
       
    }]
};
console.log(req.body)
setTimeout(() => {
    res.json({ success: true, data: data, message: 'data  after sync' })
}, 2000)
}