import React from 'react';
import './Review.css'

const Reviews = ({ data }) => {
    const { name, title, ratings } = data;
    return (
        <div className='customer-reviews'>

            <h3>Name: {name}</h3>
            <h4>{title}</h4>
            <p>Ratings: {ratings}</p>
           
        </div>
    );
};

export default Reviews;