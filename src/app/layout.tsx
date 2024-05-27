import type { Metadata } from 'next';
import './globals.css';
import Link from 'next/link';
import { Control } from './Control';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const res = await fetch('http://localhost:9999/topics', {
    next: { revalidate: 0 }, // 들어간 숫자의 촛수 동안만 캐시를 유지하겠다
  });
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

        {/* params가 있어야 (=게시물에 들어가 있어야) update버튼과 delete버튼이 보이도록 만들기 
          => 이 layout.tsx가 params를 갖고 오기 위해서는 useParams를 사용, 근데 얘는 서버컴포넌트에서는 사용 불가
              => 그러면 ul 태그 내용만 클라이언트 컴포넌트로 따로 만들어서 가져오면 됨!*/}
        {/* <ul>
          <li>
            <a href='/create'>Create</a>
          </li>
          <li>
            <a href='/update'>Update</a>
          </li>
          <li>
            <input type='button' value='delete' />
          </li>
        </ul> */}
        <Control />
      </body>
      {/* chilren = page.tsx에서 return으로 반환된 값*/}
    </html>
  );
}
