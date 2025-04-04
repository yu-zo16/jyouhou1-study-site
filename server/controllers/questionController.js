const questionModel = require('../models/questionModel');

// 質問データを返すコントローラー
const getQuestions = async (req, res) => {
  try {
    const questions = await questionModel.getAllQuestions();
    res.json(questions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching questions' });
  }
};

module.exports = {
  getQuestions,
};
