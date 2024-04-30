const path = require("path");
const multer = require("multer");
const express = require("express");

const port = 5000;

const storage = multer.diskStorage({
  destination: function (_req, _file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (_req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use((req, _res, next) => {
  console.log(`Received request for ${req.url}`);
  next();
});

app.post("/upload_files", upload.array("files"), uploadFiles);

function uploadFiles(req, res) {
  const files = req.files;
  let payload;
  if (files instanceof Array) {
    payload = files.map((file) => {
      return {
        size: file.size,
        path: file.path,
        image_type: file.mimetype,
        file_name: file.originalname,
        url: `http://localhost:5000/uploads/${file.filename}`,
      };
    });
  }
  res.json({ message: "Success", payload });
}

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
