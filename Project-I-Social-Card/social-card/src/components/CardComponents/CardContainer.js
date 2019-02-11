import React from 'react';
import './Card.css';
import CardBanner from './components/CardComponents/CardBanner';
import CardContent from './components/CardComponents/CardContent';


const CardContainer = () => {
    return (
        <div>
        <CardBanner />
        <CardContent />
        </div>
    );
   }


export default CardContainer;