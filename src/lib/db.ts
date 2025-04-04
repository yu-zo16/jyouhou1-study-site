// src/lib/db.ts

import { Client } from 'pg';

const connectionString = process.env.NEON_DATABASE_URL

const client = new Client({
  connectionString: connectionString,
});

export async function fetchData() {
  try {
    await client.connect();
    const res = await client.query('SELECT * FROM your_table');
    console.log(res.rows); // データをコンソールに表示
    return res.rows; // データを返す
  } catch (err: unknown) {
    // エラーが 'Error' 型であることを確認してからアクセス
    if (err instanceof Error) {
      console.error('Database query error', err.message); // messageプロパティにアクセス
    } else {
      console.error('An unknown error occurred');
    }
    throw new Error('Failed to fetch data');
  } finally {
    await client.end();
  }
}
