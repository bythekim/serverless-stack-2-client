const dev = {
  STRIPE_KEY: "pk_test_xC8A52HhjBrUTZ24C4QJGUV2",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-1hulusvalou0a"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://a3l3lj8v4h.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_WG3ULbnCG",
    APP_CLIENT_ID: "562voh7kidul9r6e2ae588r2b2",
    IDENTITY_POOL_ID: "us-east-1:6f249984-851d-4e7a-b0de-3677e63a5240"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_xC8A52HhjBrUTZ24C4QJGUV2",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-89tnnwk3v5sw"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://txtj128e16.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_SDXmaUkKt",
    APP_CLIENT_ID: "1i9mqs2h748j35eadtmgu0u1ia",
    IDENTITY_POOL_ID: "us-east-1:f0a14c59-d950-4afe-a675-16a337caf005"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  //Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};