import React from 'react'
import "./SingleProduct.css"
import { Button } from '../Button/Button'

export const SingleProduct = ({image, title, description, price, id} ) => {
  return (
    <div className='single-product-container'>
        <img className='single-product-img' src={image} alt={title} />
        <h3 className='product-title'>{title}</h3>
        <p className='product-description'>{description}</p>
        <p className='product-price'>${price}</p>
        <Button buttonText="Comprar Ahora!"/>

    </div>
  )
}
