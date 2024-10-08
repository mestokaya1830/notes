export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <h2>Admin Layout</h2>
        <main className="router">
        {children}
        </main>
      </body>
    </html>
  );
}

