var AWS = require('aws-sdk');
var s3 = new AWS.S3();
AWS.config.update({region: 'us-west-2'});

exports.handler = (event, context) => {
    let myChoice = event["myChoice"]
    var myDict = {
        "rock": "paper",
        "paper": "scissors",
        "scissors": "rock"
    }

    // Create the object in S3
    var params = {
        Body: `You chose ${myChoice}, but i chose ${myDict[myChoice]}. I win!`,
        Bucket: "mtech-rock-paper-scissors",
        Key: "rowanolson/results.txt"
    }
    s3.putObject(params, function(err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else     console.log(data);           // successful response
        /*
        data = {
         ETag: "\"6805f2cfc46c0f04559748bb039d69ae\"", 
         VersionId: "tpf3zF08nBplQK1XLOefGskR7mGDwcDk"
        }
        */
      });

    // bucket/yourname/results.txt

    // Return the string
};
