import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import Head from 'next/head';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="author" content="Anna Belyakova" />
      </Head>
      <Header />
      <div className="content-wrapper">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
