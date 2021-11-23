//import your handler file
let handler = require('./update-assignment');

// get .env variables
const dotenv = require('dotenv');
const result = dotenv.config({path: '../../.env'});
const { parsed: envs } = result;

// {context, event, callback}
handler.handler({
        ACCOUNT_SID: envs.ACCOUNT_SID,
        AUTH_TOKEN: envs.AUTH_TOKEN,
        SF_CONSUMER_KEY: envs.SF_CONSUMER_KEY,
        SF_CONSUMER_SECRET: envs.SF_CONSUMER_SECRET,
        SF_USERNAME: envs.SF_USERNAME,
        SF_PASSWORD: envs.SF_PASSWORD,
        SF_TOKEN: envs.SF_TOKEN,
        SF_IS_SANDBOX: envs.SF_IS_SANDBOX
    }, // context
    {
        "assignmentRecordId": "a0D5f0000033BqsEAE",
        "contactResponse": "1",
        // "TwilioMessageId": ""
    }, // event 
    (error, result) => {
        if (error) console.error(JSON.stringify(error, null, 2));
        else console.log(JSON.stringify(result, null, 2));
    }
);