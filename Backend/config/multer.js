import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';

cloudinary.config({
  cloud_name: 'de8j43bvd',
  api_key: '552827116629916',
  api_secret: 'snE_coPwPA0Ft3pE4-SqptXvTZs'
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'Weddingpro',
    allowed_formats: ['jpg', 'png', 'jpeg'],
    limits: { fileSize: 1024 * 1024 * 5 },
  }
});

const upload = multer({ storage });

export default upload;
