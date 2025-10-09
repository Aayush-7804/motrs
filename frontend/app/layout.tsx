import Header from '@/components/header';
import React from 'react';
import './globals.css'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Footer from '@/components/footer';

const layout: React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <html lang='en'>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

export default layout






