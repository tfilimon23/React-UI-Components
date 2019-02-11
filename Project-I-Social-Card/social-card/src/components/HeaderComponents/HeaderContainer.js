import React from 'react';
import './Header.css';
import HeaderTitle from './components/HeaderComponenets/HeaderTitle';
import ImageThumbnail from './components/HeaderComponents/ImageThumbnail';

const HeaderContainer = () => {
 return (
     <div>
     <ImageThumbnail />
     <HeaderTitle />
     </div>
 );
}



export default HeaderContainer;