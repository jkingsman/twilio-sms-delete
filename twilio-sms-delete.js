#!/usr/bin/env node

console.log('hello world');

var program =   require('commander');
var twilio =    require('twilio');

program
    .version(pkg.version)
    .option('-s, --sid <sid>',          'Your Twilio API Account SID')
    .option('-a, --auth <authtoken>',   'Your Twilio API Auth Token')
    .option('-v, --verbose',            'Display extra information')
    .option('-d, --dryrun',             'Doesn\'t make any changes to actual data, but displays what it would do')
    .parse(process.argv);
    
console.log("Initializing with SID " + program.sid + " and auth token " + program.authtoken);
