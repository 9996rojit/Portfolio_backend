/* eslint-disable no-undef */
const mongoose = require('mongoose');

async function UploadFile(file) {
  const {
    createReadStream, filename, mimetype, encoding,
  } = await file;
  mongoose.mongo.GridFSBucket(mongoose.connection.db);
  const uploadStream = bucket.openUploadStream(filename);
  const stream = createReadStream();
  await new Promise((resolve, reject) => {
    stream
      .pipe(uploadStream)
      .on('error', reject)
      .on('finish', resolve);
  });
  return {
    id: uploadStream.id, filename, mimetype, encoding,
  };
}

module.exports = UploadFile;
