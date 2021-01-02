import React from 'react';
import HeaderComponent from '../header/header.component';
import FooterComponent from '../footer/footer.component';
import style from './layout.style.css'
export default function LayoutComponent({children}) {
  return (
    <div>
        <HeaderComponent />
        <div className="container-fluid">{children}</div>
        <FooterComponent />
    </div>
  );
}
