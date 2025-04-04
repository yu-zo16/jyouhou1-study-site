// src/app/api/questions/route.ts
import { NextResponse } from 'next/server';
import { Client } from 'pg';

export async function GET() {
  // Neonのデータベース接続情報
  const client = new Client({
    user: 'your_username',  // 自分のNeonユーザー名
    host: 'your_host',  // Neonのホスト名
    database: 'your_database',  // 使用するデータベース名
    password: 'your_password',  // 自分のNeonパスワード
    port: 5432,  // PostgreSQLのポート番号
  });

  try {
    // データベースに接続
    await client.connect();

    // データベースからデータを取得
    const res = await client.query('SELECT id, text FROM questions');
    
    // 質問データを返す
    return NextResponse.json({ questions: res.rows });
  } catch (error) {
    console.error('Error fetching data from Neon:', error);
    return NextResponse.error();
  } finally {
    // データベース接続をクローズ
    await client.end();
  }
}
