import type { Metadata } from 'next';
import './globals.css';
import Link from 'next/link';

// export const metadata: Metadata = {
//   title: '연습용',
//   description: '넥스트 감잡아봐용',
// };

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const res = await fetch('http://localhost:9999/topics');
  const topics = await res.json();
  // 이렇게 바꿈으로써 서버쪽에서 동적으로 생성한 정적인 내용을 클라이언트에게 전달할 수 있음! 용량이 매우 절약됨

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
