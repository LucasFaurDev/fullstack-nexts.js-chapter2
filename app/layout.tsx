import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div>
          <nav>
            <Link href="/">Home</Link>
            {" | "}
            <Link href="/blogs">Blogs</Link>
          </nav>
        </div>
        {children}
      </body>
    </html>
  );
}
