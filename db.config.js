import AWS from "aws-sdk";

AWS.config.update({
  region: "ap-northeast-1",
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY ,
});

const db = new AWS.DynamoDB.DocumentClient();

const Table = "Student-Nishant";

export { db, Table };
