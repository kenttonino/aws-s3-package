require('dotenv').config();
const S3 = require('aws-sdk/clients/s3');

/**
 * A function that upload an object in AWS S3 using the content of the file.
 */
module.exports.s3UploadFile = function (file) {
  const bucketName = process.env.AWS_BUCKET_NAME;
  const region = process.env.AWS_BUCKET_REGION;
  const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
  const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;

  const s3 = new S3({
    region,
    accessKeyId,
    secretAccessKey,
  });

  const params = {
    Bucket: `${bucketName}`,
    Body: file.createReadStream(),
    ContentEncoding: file.encoding,
    ContentType: file.mimetype,
    Key: file.filename,
    ACL: 'public-read',
  };

  return s3.upload(params).promise();
};

/**
 * A function that delete an object in AWS S3 using the key.
 */
module.exports.s3DeleteFile = async (key) => {
  const bucketName = process.env.AWS_BUCKET_NAME;
  const region = process.env.AWS_BUCKET_REGION;
  const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
  const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;

  const s3 = new S3({
    region,
    accessKeyId,
    secretAccessKey,
  });

  const params = {
    Bucket: `${bucketName}`,
    Key: key,
  };

  return s3.deleteObject(params).promise();
};
