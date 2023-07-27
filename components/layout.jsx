import Footer from './footer';
import Header from './header';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Layout({ children }) {
  return (
    <>
    <div className={inter.className}>
      {/* <Header /> */}
      <main>{children}</main>
      {/* <Footer /> */}
    </div>
    </>
  );
}
