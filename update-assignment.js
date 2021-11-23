// Doc: https://docs.google.com/document/d/1ymPLgqjatNj6xAuHdX8FVgcmUNzrpmUPHtQ94G9rHA4/edit#
// Requires nforce as dependency npm install nforce https://github.com/kevinohara80/nforce/blob/master/README.md
// nforce examples here: https://github.com/kevinohara80/nforce/blob/master/examples/
// This is more boilerplate functionality https://github.com/anthonywong555/twilio-connect-to-salesforce/blob/master/twilio/functions/twilio-connect-to-salesforce.js

exports.handler = function (context, event, callback) {
    console.log('Running function')

    let nforce = require('nforce');
    let oauth;

    // Create the connection with the Salesforce connected app
    let org = nforce.createConnection({
        clientId: context.SF_CONSUMER_KEY,
        clientSecret: context.SF_CONSUMER_SECRET,
        redirectUri: 'https://twilio.com',
        mode: 'single'
    });

    // Authenticate and return OAuth token
    org.authenticate({
        username: context.SF_USERNAME,
        password: context.SF_PASSWORD + context.SF_TOKEN
    }, function (err, resp) {

        if (!err) {
            console.log('Successfully authenticated:', resp);
            oauth = resp;
        }

        // Set assignment data
        function checkResponse(contactResponse) {
            if (contactResponse == 1) {
                return "Confirmed";
            }
            return "Declined";
        }
        const assignmentData = {
            Id: event.assignmentRecordId,
            Contact_Response__c: checkResponse(event.contactResponse)
        }

        let as = nforce.createSObject('Assignment__c', assignmentData);
        org.update({
            sobject: as,
            oauth: oauth
        },
        (err, resp) => {
            if(!err){
                console.log('Successfully updated assignment');
                callback(null, null)
            }else {
                console.log('Error updating assignment: ',err);
            }
        });

        // // Set contact data
        // let ct = nforce.createSObject('Contact');
        // ct.set('lastname', lastname);
        // //   ct.set('State__c', 'California');
        // ct.set('Phone', event.phone);
        // ct.set('MobilePhone', event.phone);

        // // Create contact in our SFDC org
        // org.insert({
        //     sobject: ct,
        //     oauth: oauth
        // }, function (err, resp) {
        //     if (!err) {
        //         console.log('Successfully created contact');
        //         callback(null, null);
        //     } else {
        //         console.log("Error creating contact:", err);
        //     }
        // });

    });
};