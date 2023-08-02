import { useState } from "react"
import { Button } from "../Button/Button"
import "./productCard.css"
import { shortDescription } from "../../utilites/shortDescription"
import { Link } from "react-router-dom"


export const ProductCard = ({category, imgSrc, title, price, description, hidden, id}) => {
  const [hiddenValue, setHiddenValue] = useState(true)


  const changeHiddenValue = () => {
    setHiddenValue((hiddenValue)=> !hiddenValue )
    
  }
  
  return (
    
   

   
      
       <div className="product">
        
        <img className='product-image' src={imgSrc} alt="" />
        <p className="product-title">{title}</p>
        <div className="description-container">
        {hidden && <p className="description" >{hiddenValue? shortDescription(description): description}</p>}
        { hidden && <Button buttonText={hiddenValue? "Ver mas": "Ver Menos"} onClick={changeHiddenValue} /> }
        </div>
        
        <p className="price">${price}</p>
       <Link className="show-product" to={`/product-details/${category}/${id}`}>View Product</Link>
        
    </div>
  
    
  )
}
