const express = require('express');
const router = express.Router();
const AWS = require('aws-sdk');
const SwiftClient = require('openstack-swift-client');


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
      }
    } 
 */
    

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
    console.log('syncALL :',req.body)
    setTimeout(() => {
        let obj= data.Contents[0];
        obj.copied=  'success';
        res.json({ success: true, data: obj, message: 'data  after sync' })
    }, 2000)

   
}