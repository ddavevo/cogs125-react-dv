import './ui/global.css';

export const metadata = {
  title: 'My App',
  description: 'This is my app.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <base href="/cogs125-react-dv/" />
      </head>
      <body>{children}</body>
    </html>
  );
}