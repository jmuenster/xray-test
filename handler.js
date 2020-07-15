const { v4: uuidv4 } = require('uuid');
const AWSXRay = require('aws-xray-sdk');

const AWS = AWSXRay.captureAWS(require('aws-sdk'));

const sf = new AWS.StepFunctions({region: 'us-west-2'});

module.exports.returnEvent = async event => {
  return event;
};

module.exports.startWorkflow = async event => {
  const response = await sf.startExecution({
    stateMachineArn: process.env.SF_ARN,
    name: uuidv4()
  }).promise();
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: response,
        input: event,
      },
      null,
      2
    ),
  };
};
