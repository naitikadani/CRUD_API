const express = require('express');
const app = express();
const request = require('request');
const bodyParser = require('body-parser');
/* const http = require('http');
 */let trackingId = 7126287792;
/* app.use(bodyParser.json());
 */console.log(trackingId);

const options = {
    url: `http://www.dhl.co.in/shipmentTracking?AWB=${trackingId}`,
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Accept-Charset': 'utf-8'
    }
};

/* app.get('/', function (req, res) {
    request(`http://jsonplaceholder.typicode.com/todos/1`, function (err, response, body) {
        response.setEncoding('utf8');
        response.on('data', function (body) {
            console.log(body);
        });
    })
    res.send('Hello world!');
}) */

// sample awb: 7126287792
request({
    url: `http://www.dhl.co.in/shipmentTracking?AWB=${trackingId}`,
    method: 'GET'
}, function (err, response, body) {
    bodyParser.json()
    console.log(err);
    console.log('body', body)
})

/* app.listen(3000, () => console.log("Listening on 3000")); */