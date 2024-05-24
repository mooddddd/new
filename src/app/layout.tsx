'use client';

import type { Metadata } from 'next';
import './globals.css';
import { useEffect, useState } from 'react';
import Link from 'next/link';

// export const metadata: Metadata = {
//   title: '연습용',
//   description: '넥스트 감잡아봐용',
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    fetch('http://localhost:9999/topics')
      .then((res) => res.json())
      .then((result) => {
        setTopics(result);
      });
  }, []);

  const menu = topics.map((topic: any) => {
    return (
      <li key={topic.id}>
        <Link href={`/read/${topic.id}`}>{topic.title}</Link>
      </li>
    );
  });

  return (
    <html>
      <body>
        <h1>
          <Link href='/'>web</Link>
        </h1>
        <ol>{menu}</ol>
        {children}
        <ul>
          <li>
            <a href='/create'>Create</a>
          </li>
          <li>
            <a href='/update'>Update</a>
          </li>
          <li>
            <input type='button' value='delete' />
          </li>
        </ul>
      </body>
      {/* chilren = page.tsx에서 return으로 반환된 값*/}
    </html>
  );
}
