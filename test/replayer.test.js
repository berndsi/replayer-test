'use strict';

const preq = require('preq');
process.env.VCR_MODE = 'cache'; // 'record' or 'cache'
const replayer = require('replayer'); // for replayer (has issues)
// const replayer = require('sepia'); // OR use sepia to see how it's supposed to work

// replayer.configure({
//     verbose: true,
//     debug: true
// });

// replayer.disable(); // works if replayer is disabled

describe('replayer', function() {
    it('POST OK', function() {
        return preq.post({
            method: 'post',
            uri: 'https://en.wikipedia.org/w/api.php',
            headers: {
                "user-agent": "WMF Mobile Content Service dev"
            },
            body: {
                action: 'query',
                meta: 'siteinfo',
                siprop: 'general|namespaces|namespacealiases|specialpagealiases',
                format: 'json',
                formatversion: 2
            }
        })
        .then(function(res) {
            console.log('success!');
        });
    });

    it('another server, POST with body is ok', function() {
        return preq.post({
            method: "post",
            uri: "https://jsonplaceholder.typicode.com/posts",
            body: {
                action: 'foo'
            }
        })
        .then(function(res) {
            console.log('success!');
        });
    });

    it('another server, GET without body: 504', function() {
        return preq.get({
            method: "get",
            uri: "https://jsonplaceholder.typicode.com/posts/1"
        })
        .then(function(res) {
            console.log('success!');
        });
    });
});