const cloudinary = require('cloudinary').v2;
//require("dotenv").config();
cloudinary.config({
    cloud_name: "dgybzoru8",
    api_key: "455724483936166",
    api_secret: "nARSz34ScMt4gvl1AUGleNaUqxk"
})

module.exports = cloudinary