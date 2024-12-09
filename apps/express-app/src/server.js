const app = require('./app');
const databaseConnection = require('./config/database');
const cloudinary = require('cloudinary');
const dotenv = require('dotenv');
dotenv.config({ path: './config/config.env' });

cloudinary.config({
  cloud_name: 'djlchqvkx',
  api_key: '792571617441463',
  api_secret: 'rwRTaR3v0MtUySc2HQKBgFWfNto',
});

databaseConnection();

app.listen(3000, () => {
  console.log(`server is running on port ${3000}`);
});
