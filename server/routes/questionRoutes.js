const express = require('express');
const router = express.Router();
const questionController = require('../src/controllers/questionController');

// 質問データを取得するエンドポイント
router.get('/', questionController.getQuestions);

module.exports = router;
