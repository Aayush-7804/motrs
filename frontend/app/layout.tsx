import Header from '@/components/header';
import React from 'react';
import './globals.css'

const layout: React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <html lang='en'>
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}

export default layout






