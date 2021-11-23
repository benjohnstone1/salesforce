This is a simple Twilio Serverless created for demo purposes
It serves as a way for Salesforce to call a Twilio Studio Flow then update a Salesforce custom object based on responses from a users sms response.

In order for this to work a Salesforce Connected App must be created:
Use Salesforce to create a new Connected App.
In Lightning Experience, you use the App Manager to create Connected Apps: From Setup, enter App in the search box, then select App Manager. Click New Connected App.
In Salesforce Classic, from Setup, enter Apps in the search box, then select Apps (under Build | Create). Under Connected Apps, click New.
Enter the name of your application. (e.g. Twilio)
Enter the contact email information, as well as any other information appropriate for your application.
Select Enable OAuth Settings.
Enter https://www.twilio.com as the Callback URL.
Find Access and manage your data (API) under Available OAuth Scopes and add it to Selected OAuth Scopes: 'Access and manage your data (api)'
Click Save. You will see an alert that the connected app could take 2–10 minutes for the changes to take effect. Click continue.

Make sure to update the environment variables https://www.twilio.com/console/functions
SF_IS_SANDBOX
Set to true if you’re testing in a sandbox organization (your organization’s URL starts with test.salesforce.com). Otherwise set to false.
SF_CONSUMER_KEY
The Consumer Key from your Connected App.
SF_CONSUMER_SECRET
The Secret Key from your Connected App. Click the link in Salesforce to reveal your Secret Key.
SF_PASSWORD
A Salesforce Password. This can be a personal password, but we recommend using a system user’s username.
If you are performing this task in production, make sure that this user has a Twilio for Salesforce license assigned to them.
SF_USERNAME
A Salesforce Username. This can be a personal username, but we recommend using a system user’s username.
If you are performing this task in production, make sure that this user has a Twilio for Salesforce license assigned to them.
SF_TOKEN
A Salesforce Security Token. This can be a personal token, but we recommend using a system user’s token.
If you have forgotten the token, you will need to reset it. Visit the salesforce instructions for details.

Also make sure to include nforce as a dependency in your Twilio Function https://www.twilio.com/console/functions


