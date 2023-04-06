const multer = require("multer");
const storage = multer.diskStorage({
  destination(req, file, cd) {
    cd(null, "uploads");
  },
  filename(req, file, cd) {
    cd(null, file.originalname);
  },
});

const types = ["uploads/png", "uploads/jpeg", "uploads/jpg"];
const fileFilter = (req, file, cb) => {
  if (types.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
module.exports = multer({ storage, fileFilter });