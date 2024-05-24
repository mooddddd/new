import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '연습용',
  description: '넥스트 감잡아봐용',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <h1>
          <a href='/'>web</a>
        </h1>
        <ol>
          <li>
            <a href='/read/1'>html</a>
          </li>
          <li>
            <a href='/read/2'>css</a>
          </li>
        </ol>
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
