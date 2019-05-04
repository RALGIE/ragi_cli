#!/usr/bin/env node

const program = require('commander'); // https://github.com/tj/commander.js/
const { prompt } = require('inquirer'); // require inquirerjs library https://github.com/SBoudrias/Inquirer.js#documentation

const questions	 = [{
    type : 'input',
    name : 'url',
    message : 'Enter a url'
  }],
  getDataCenterRootKeyQuestions = [{
    type : 'input',
    name : 'hostname',
    message : 'Enter a hostname'
  },{
    type : 'input',
    name : 'dataCenter',
    message : 'Enter the datacenter key'
  },{
    type : 'input',
    name : 'token',
    message : 'Enter a token'
  }
]; 


// Require logic.js file and extract controller functions using JS destructuring assignment
const { getConsulKeys, getDataCenterRootKey } = require('./controller/consul.js');

program
  .version('0.0.1')
  .description('RAGI tool');

program
  .command('getConsulKeys')
  .alias('lskeys')
  .description('Get all consul settings')
  .action(() => {
    prompt(questions).then(answers =>
      getConsulKeys(answers));
    });


program
    .command('getDataCenterRootKey')
    .alias('dcroot')
    .description('Get all data center root keys')
    .action(() => {
      prompt(getDataCenterRootKeyQuestions).then(answers =>
        getDataCenterRootKey(answers));
      });

program.parse(process.argv);