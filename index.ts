import {
    Bucket,
    DownloadResponse,
    File,
    SaveOptions,
    Storage,
    UploadResponse,
    StorageOptions,
  } from '@google-cloud/storage';


  let options:StorageOptions={}
  let storage = new Storage(options)
  let bucket = storage.bucket('bucketName')

  export {bucket};


  console.log({bucket})


