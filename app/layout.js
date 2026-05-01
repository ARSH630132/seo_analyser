export const metadata = {
  title: 'Hirezaap SEO Checker',
  description: 'Analyze your website SEO health for free.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Aap yahan favicon ya fonts add kar sakte hain */}
      </head>
      <body style={{ margin: 0, padding: 0, fontFamily: 'Inter, system-ui, sans-serif' }}>
        {children}
      </body>
    </html>
  );
}