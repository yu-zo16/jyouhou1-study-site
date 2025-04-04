const express = require('express');
const dotenv = require('dotenv');
const questionRoutes = require('./routes/questionRoutes');

dotenv.config();

const app = express();
const port = 5000;

// ミドルウェアの設定
app.use(express.json());
app.use('/api/questions', questionRoutes);  // 質問の API ルートを統合

// サーバーの起動
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
