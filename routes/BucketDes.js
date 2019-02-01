const express = require('express');
const AWS = require('aws-sdk');
const SwiftClient = require('openstack-swift-client');
const https = require('https');

/**
 * 
 * @param {*} req =={  type:string ,  // 'S3' or 'swift'
        bucketName: string,
        username: string,
        url: string,
        secretKey: string}
 * @param {*} res 
 */
module.exports = (req, res) => {
    if (req.body.type === 'S3') {
        //   console.log(req.body.type)
        let uid = req.body.username
        let secret = req.body.secretKey;
        let viprDataNode = req.body.url;
        let bucketName = req.body.bucketName;
        AWS.config.update({ accessKeyId: uid, secretAccessKey: secret, region: "Standard", sslEnabled: false, s3ForcePathStyle: true });
        let ep = new AWS.Endpoint(viprDataNode);
        s3Client = new AWS.S3({
            endpoint: ep,
            httpOptions: {
                agent: new https.Agent({ rejectUnauthorized: false })
            }
        });
        s3Client.listObjects({ Bucket: bucketName }, (err, data) => {
            if (err) { res.json({ success: false, data: err, message:'error parameter' }) }
            if (data) { res.json({ success: true, data: data }) }
        })
    } else if (req.body.type === 'swift') {
        //  console.log(req.body.type)
        let username = req.body.username
        let secret = req.body.secretKey;
        let url = req.body.url;
        let containerName = req.body.bucketName;
        let client = new SwiftClient(new SwiftClient.SwiftAuthenticator(url, username, secret));

        let container = client.container(containerName);

        container.list().then(result => {
            console.log('result:', result)
        }).catch(err => {
            console.log('swift err:', err)
        })

    } else {
        res.json({ success: false,  message: 'error parameter' });
    }

    // let data = {
    //     Contents: [{
    //         Etag: "dfqsf",
    //         Key: "file1named1",
    //         LastModified: "dsfsdfdsf",
    //         Size: 46
    //     },
    //     {
    //         Etag: "dfqsf",
    //         Key: "file2name",
    //         LastModified: "02/5/2018",

    //         Size: 45
    //     }
    //     ]
    // }


    // res.json({ success: true, data: data, message: 'error parameter' });
}