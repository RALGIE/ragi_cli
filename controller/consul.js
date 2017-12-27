#!/usr/bin/env node

var request = require('request');

const getConsulKeys = (url) => {

  request('http://search.twitter.com/search.json?q=node.js', function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
  });
  console.log(url.url);
};

//https://demo.consul.io/v1/catalog/datacenters
//https://demo.consul.io/v1/kv/?keys&seperator=/&dc=nyc3&token=
//https://demo.consul.io/v1/kv/global/?keys&seperator=/&dc=nyc3&token=

const getDataCenterRootKey = (answers) => {
  console.log('test');
  let rootKeysUrl = answers.hostname + '/v1/kv/?keys&seperator=/&dc=' + answers.dataCenter + '&token='+ answers.token;
  request.get(rootKeysUrl,function(error, response, body){
    if (response){
      console.log(JSON.parse(response.body));
    } else {
        console.log('Unable to get data, error=', error); // Print the error if one occurred
    }
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  });
  console.log(rootKeysUrl);
};
// Export all methods
module.exports = {  getConsulKeys, getDataCenterRootKey };