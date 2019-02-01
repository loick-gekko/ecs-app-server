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
    console.log(req.body)
    setTimeout(() => {
        res.json({ success: true, data: data.Contents, message: 'data  after sync' })
    }, 4000)
}