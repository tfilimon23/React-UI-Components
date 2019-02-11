import React from 'react';
import './Header.css';
import HeaderContent from './components/HeaderComponents/HeaderContent';

const HeaderTitle = () => {
    return (
    <div>
    <h1>Lambda School</h1>
    <h5>@LambdaSchool</h5>
    <p>11 feb</p>
    <HeaderContent />
    </div>
    );
}

export default HeaderTitle;