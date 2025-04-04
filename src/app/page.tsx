// src/app/page.tsx
'use client';  // Reactのクライアントコンポーネントを使う場合は必要

import { useEffect, useState } from 'react';

interface Question {
  id: number;
  text: string;
}

const Home = () => {
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    // APIから質問データを取得
    const fetchQuestions = async () => {
      const res = await fetch('/api/questions');
      const data = await res.json();
      setQuestions(data.questions);
    };
    
    fetchQuestions();
  }, []);

  return (
    <div>
      <h1>Questions</h1>
      <ul>
        {questions.map((question) => (
          <li key={question.id}>{question.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
