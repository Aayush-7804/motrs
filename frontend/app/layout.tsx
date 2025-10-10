import Header from '@/components/header';
import React from 'react';
import './globals.css'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Footer from '@/components/footer';
import OverlFooter from '@/components/car-detail/Overlay-footer';

const layout: React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <html lang='en'>
      <body>
        <Header />
        {children}
        <Footer />
        <OverlFooter />
      </body>
    </html>
  )
}

export default layout






