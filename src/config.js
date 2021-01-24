const config = {
    s3: {
      REGION: "us-east-1",
      BUCKET: "notes-app-upld",
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://8j83c4gsca.execute-api.us-east-1.amazonaws.com/prod",
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_faSgdsvZk",
      APP_CLIENT_ID: "6rtgd9ohmc4s08uvop1f3uh33",
      IDENTITY_POOL_ID: "us-east-1:794dc5c5-d1a5-45ad-b9e4-a1999616a723",
    },
  };
  
  export default config;