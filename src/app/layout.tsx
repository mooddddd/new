import './globals.css';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        {/* <header>Header</header> */}
        <main>{children}</main>
        {/* <footer> Footer</footer> */}
      </body>
    </html>
  );
}
