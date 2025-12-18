export const metadata = {
  title: "Simple Invoice App",
  description: "Beginner invoice generator",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
