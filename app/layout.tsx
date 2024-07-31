import "./globals.css";

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin=""
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>

      <body>{children}</body>
    </html>
  );
}
