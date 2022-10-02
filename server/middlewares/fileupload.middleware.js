const Path = require("path");
const multer = require("multer");
// upload file
let configDir = Path.join(__dirname, "../public/uploads");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, configDir);
  },
  filename: function (req, file, cb) {
    //console.log(file);
    let ext = file.originalname.substring(
      file.originalname.lastIndexOf("."),
      file.originalname.length
    );
    let filename = file.originalname
      .split(".")
      .slice(0, -1)
      .join(".")
      .split(" ")
      .join("_");
    let newFileName = filename + "_" + Date.now() + ext;
    cb(null, newFileName);
    req.body[file.fieldname] = newFileName;
  },
});
const upload = multer({
  storage: storage,
});
// upload file

module.exports = upload;
