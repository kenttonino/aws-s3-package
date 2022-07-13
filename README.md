### AWS S3 Package
- This is an NPM package that will allow to use AWS-SDK for S3 much simpler.
- Compatible with JavaScript, TypeScript, GraphQL, and NodeJS.

### Technologies | Packages Used
- Backend: JavaScript, NodeJS
- Others: Prettier, AWS-SDK, Dotenv, Git, Bash, Github, Github Actions

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
import { s3UploadFile, s3DeleteFile } from 'aws-s3-package'

async uploadAvatar(
  id: number,
  avatar: FileUpload,
): Promise<UploadAvatarOutput> {
  // deleting a file to S3
  await s3DeleteFile(avatar.filename)

  // uploading a file to S3
  const uploadImage = await s3UploadFile(avatar)

  return {
    avatar: uploadImage.Location,
  }
}
```
