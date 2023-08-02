import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { SingleProduct } from "../../components/SingleProduct/SingleProduct";
import { REQUEST_STATUS, useFetch } from "../../utilites/useFetch";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import "./SpecificProduct.css"

export const SpecificProduct = () => {  
  const { pathname } = useLocation();
  const getProductName = (product) => {
    const [, , productCategory, productId] = product.split("/");
    return { productCategory, productId };
  };
  const {productCategory, productId} = getProductName(pathname)
  const {info, status, getData} = useFetch({url:`https://fakestoreapi.com/products/category/${productCategory}`}) 
  
  
  useEffect(() => {
    getData()
    
    }
  , [])
 
  

  console.log(info);
  


  return (
    
    <div className="specific-product-container">
      <div className="main-product">
      {status === REQUEST_STATUS.LOADING && <div className="lds-ring"><div></div><div></div><div></div><div></div></div>}
      {status === REQUEST_STATUS.SUCCESS && info.map(item => {
      if(item.id == productId) {
        console.log(item)
        return (<SingleProduct key={item.id} title={item.title} image={item.image} price={item.price} description={item.description}/>)
      }
    })        
     }

      </div>
       <div className="other-products-container">
      
        {status === REQUEST_STATUS.SUCCESS && info.map(item => {
            if(item.id != productId){
            return (
              <ProductCard title={item.title} description={item.description} price={item.price} imgSrc={item.image} key={item.id} id={item.id} category={item.category}/>
            )}
          })}

        
          
        </div>     
    
    </div>
   
  )
};
