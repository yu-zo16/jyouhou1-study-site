const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.NEON_DATABASE_URL,
});

// 質問を全件取得
const getAllQuestions = async () => {
  const result = await pool.query('SELECT * FROM questions');
  return result.rows;
};

module.exports = {
  getAllQuestions,
};
