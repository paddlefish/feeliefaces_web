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
