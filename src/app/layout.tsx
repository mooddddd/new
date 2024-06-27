import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        {/* <header>Header</header> */}
        <main className={`${inter.variable} font-sans`}>{children}</main>
        {/* <footer> Footer</footer> */}
      </body>
    </html>
  );
}
