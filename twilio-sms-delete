#!/usr/bin/env node
var program =   require('commander');
var assert =    require('assert');

program
    .option('--sid <sid>',          'Your Twilio API Account SID')
    .option('--auth <authtoken>',   'Your Twilio API Auth Token')
    .parse(process.argv);


assert.ok(program.sid, "SID is required")
assert.ok(program.auth, "Auth Token is required")


//build our client
var client = require('twilio')(program.sid, program.auth);


client.messages.list({}, function(err, data) {
    if (err) {
        console.log(err);
        console.log("This usually means your credentials are bad.");
        process.exit(1);
    }
    
    //loop through every page
    for(var currPage = 0; currPage < data.num_pages; currPage++) {
        //retrieve the current page
        client.messages.list({Page: currPage}, function(err, data) {
            //get a list of messages for the page (currPage)
            data.messages.forEach(function(message) {
                if (message.num_media != 0) {
                    //this message has media; retrive it
                    client.messages(message.sid).media.list(function(err, data) {
                        //pull each peice of media from the message
                        data.mediaList.forEach(function(media) {
                            //delete each peice of media
                            client.messages(media.parent_sid).media(media.sid).delete(function(err, data) {
                                if (err) {
                                    console.log("Media deletion error: " + err.status + " -- " + err.message);
                                } else {
                                    console.log("Deleted Media SID " + media.sid + " successfully.");
                                }
                            });
                        });
                    });
                }
                
                //delete the message itself
                client.messages(message.sid).delete(function(err, data) {
                    if (err) {
                        console.log("Message deletion error: " + err.status + " -- " + err.message);
                    } else {
                        console.log("Deleted Message SID " + message.sid + " successfully.");
                    }
                });
            }); 
        });
    }
});
