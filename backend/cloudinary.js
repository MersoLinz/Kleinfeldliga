// cloudinary.js
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: 'drltrpag2',
  api_key: '663795571325894',
  api_secret: 'grmyXcRSISNkttQKbHxGcwsd7Mo'
});

export async function uploadImage(localFilePath) {
  try {
    const result = await cloudinary.uploader.upload(localFilePath, {
      folder: "news",
    });
    fs.unlinkSync(localFilePath);
    return result.secure_url;
  } catch (err) {
    if (fs.existsSync(localFilePath)) fs.unlinkSync(localFilePath);
    throw err;
  }
}
