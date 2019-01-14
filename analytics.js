import Analytics from '@aws-amplify/analytics';

import Amplify from 'aws-amplify';

Amplify.configure({
  Auth: {
  // REQUIRED - Amazon Cognito Identity Pool ID
    identityPoolId: 'us-east-1:4ef03e79-3b29-4c1a-a448-438a247ba786',
  // REQUIRED - Amazon Cognito Region
    region: 'us-east-1',
    appId: '2665d3a5691343699ecca9b72ad604c7',
  },
  AWSPinpoint: {
    // Amazon Pinpoint App Client ID
    appId: '2665d3a5691343699ecca9b72ad604c7',
    // Amazon service region
    region: 'us-east-1',
    mandatorySignIn: false,
  },
  region: 'us-east-1',
  appId: '2665d3a5691343699ecca9b72ad604c7',
})

let theEvent = `website:${window.location.pathname}`.replace(/[^a-zA-Z0-9_-]/g,'_');
theEvent = theEvent.replace(/_+/g, '_');
Analytics.record(theEvent);
console.log(`Analytics recorded ${theEvent}`);

const AndroidNotifyButton = document.getElementById('AndroidNotifyButton');
const EmailAddress = document.getElementById('EmailAddress');
let EventsSent = 0;
AndroidNotifyButton.addEventListener('click', (evt) => {
    Analytics.record({name: 'AndroidInterest', attributes: { email: EmailAddress.value }})
        .then( (evt) => {
            EmailAddress.outerHTML='<div>Thank You</div>'
            AndroidNotifyButton.outerHTML='<div>Submitted</div>'
        });
});


