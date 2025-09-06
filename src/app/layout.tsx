import Navbar from './components/Navbar';
import './globals.css';
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
          <link href='https://fonts.googleapis.com/css?family=Unbounded' rel='stylesheet' />
        </head>
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}