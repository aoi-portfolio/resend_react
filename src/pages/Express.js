// Express.jsを使用した例...サーバーサイド側
const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const port = 3001;

// アップロードされたファイルを保存するディレクトリ
const uploadDir = path.join(__dirname, 'uploads');

// multerを使用してファイルのアップロードを処理
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

// ファイルのアップロードを処理するエンドポイント
app.post('/api/upload', upload.single('image'), (req, res) => {
  // アップロードが成功したことをクライアントに通知
  res.json({ message: 'Upload successful' });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});