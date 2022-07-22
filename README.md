### AWS S3 Package
- This is an NPM package that will allow to use AWS-SDK for S3 much simpler.
- Compatible with JavaScript, TypeScript, GraphQL, and NodeJS.
- Currently in progress.

### Technologies | Packages Used
- Backend: JavaScript, NodeJS
- Others: AWS-SDK, Dotenv, Github Actions

### Setup
1. Install the package.

2. Create a .env file in the root directory and put the values for the following variables based on your S3 bucket.
```bash
AWS_BUCKET_NAME=
AWS_BUCKET_REGION=
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
```

3. Create your your upload API using GraphQL (highly suggest graphql-upload v13.0.0).

4. Example.
```javascript
/* TypeScript Approach */

import { s3UploadFile, s3DeleteFile } from 'aws-s3-package'
import { FileUpload } from 'graphql-upload'

async uploadFile(
  avatar: FileUpload,
): void {
  await s3UploadFile(avatar)
}

async deleteFile(
  avatar: FileUpload,
): void {
  await s3DeleteFile(avatar.filename)
}
```
