import React from 'react';
import './Card.css';

const CardContent = () => {
    return (
        <div className ="card-content">
           <h3>Get Started with React</h3>
           <p>React makes it painless to create interactive UIs. 
               Design simple views for each state in you application.</p>
            <a href ="https://reactjs.org/" target= "_blank">reactjs.org</a> 
        </div>
    );
}

export default CardContent;