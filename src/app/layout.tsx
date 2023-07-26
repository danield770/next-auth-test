import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import NavBar from './components/Navbar';
import AuthProvider from './context/AuthProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next Authenication test',
  description: 'Created by Daniel',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <AuthProvider>
          <NavBar />
          <main>{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}
