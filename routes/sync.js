const express = require('express');
const AWS = require('aws-sdk');
const SwiftClient = require('openstack-swift-client');
const https = require('https');



module.exports = (req, res) => {
    /**
 * @param req {} =  {
      source: {
        bucketName: string,
        username: string,
        url: string,
        secretKey: string
      },
      destination: {
        type: string,
        bucketName: string,
        username: string,
        url: string,
        secretKey: string
      },
      fileInfo: {i}
    } 
 * @param {res}
 */


    let data = {
        Contents: [{
            Etag: "dfqsf",
            Key: "file1name",
            LastModified: "dsfsdfdsf",
            Size: 46,
            copied: 'success'
        },
        {
            Etag: "dfqsf",
            Key: "file2name",
            LastModified: "dsfsdfdsf",
            LastModified: "dsfsdfdsf",
            Size: 44,
            copied: 'faild'
        }]
    };
    console.log(req.body.date)
    setTimeout(() => {
        res.json({ success: true, data: data.Contents[0], message: 'data  after sync' })
    }, 1000)

    // console.log(req.body)
    // //TODO:1- get object From Bucket source 
    // let uid = req.body.source.username;
    // let secret = req.body.source.secretKey;
    // let BucketSource = req.body.source.bucketName;
    // let url = req.body.source.url;
    // AWS.config.update({ accessKeyId: uid, secretAccessKey: secret });
    // let ep = new AWS.Endpoint(url);
    // osClient = new AWS.S3({ endpoint: ep, signatureVersion: 'v2', s3ForcePathStyle: true });
    // let key = req.body.fileInfo.Key;
    // osClient.getObject({ Bucket: BucketSource, Key: key }, (err, data) => {
    //     if (err) { console.log('get object err:', err); res.json({ success: false, data: err }) }
    //     if (data) {
    //         console.log('get object data', data);
    //         let fileBody = data.Body;
    //         let fileLength = data.ContentLength;
    //         // 2- put object in Bucket Destination    
    //         inputFile(fileBody, key, req, res);
    //     }

    //     function inputFile(fileBody, filename, req, res) {
    //         // username
    //         let uid = req.body.destination.secretKey;
    //         // secret key
    //         let secret = req.body.destination.username;
    //         let BucketName = req.body.destination.bucketName;
    //         let viprDataNode = req.body.destination.url;
    //         AWS.config.update({ accessKeyId: uid, secretAccessKey: secret, region: "Standard", sslEnabled: false, s3ForcePathStyle: true });
    //         let ep = new AWS.Endpoint(viprDataNode);
    //         s3Client = new AWS.S3({
    //             endpoint: ep,
    //             httpOptions: {
    //                 agent: new https.Agent({ rejectUnauthorized: false })
    //             }
    //         });


    //         s3Client.putObject({ Bucket: BucketName, Key: filename, Body: fileBody }, (err, data) => {
    //             if (err) { res.json({ success: false, data: err }) }
    //             if (data) { res.json({ success: true, data: data }) }
    //         })
    //     }


    //     res.json({ success: true, data: 'data  after sync' })


    // });
}