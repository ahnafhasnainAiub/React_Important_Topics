import React from 'react'
import './style.css';

function ProductCard({title, imageUrl, price}) {
  return (
    <div className='productCard'>
        <img src={imageUrl} alt="tilte" />
        <p>{title}</p>
        <h2>Price: {price} </h2>
    </div>
  )
}

export default ProductCard;