import 'dotenv/config'
import * as S3 from 'aws-sdk/clients/s3'

/**
 * A function that upload an object in AWS S3 using the content of the file.
 */
export const s3UploadFile = (file) => {
  const bucketName = process.env.AWS_BUCKET_NAME
  const region = process.env.AWS_BUCKET_REGION
  const accessKeyId = process.env.AWS_ACCESS_KEY_ID
  const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY

  const s3 = new S3({
    region,
    accessKeyId,
    secretAccessKey,
  })

  const params = {
    Bucket: `${bucketName}`,
    Body: file.createReadStream(),
    ContentEncoding: file.encoding,
    ContentType: file.mimetype,
    Key: file.filename,
    ACL: 'public-read',
  }

  return s3.upload(params).promise()
}

/**
 * A function that delete an object in AWS S3 using the key.
 */
export const s3DeleteFile = async (key) => {
  const bucketName = process.env.AWS_BUCKET_NAME
  const region = process.env.AWS_BUCKET_REGION
  const accessKeyId = process.env.AWS_ACCESS_KEY_ID
  const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY

  const s3 = new S3({
    region,
    accessKeyId,
    secretAccessKey,
  })

  const params = {
    Bucket: `${bucketName}`,
    Key: key,
  }

  return s3.deleteObject(params).promise()
}
