import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { REQUEST_STATUS, useFetch } from "../../utilites/useFetch";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import "./productInfo.css"

import { NotFoundPage } from "../NotFoundPage/NotFoundPage";

export const ProductInfo = () => {
  const [category, setCategory] = useState("")
 
  
  const { pathname } = useLocation();
  const capitalizeFirstLetter = (text) =>
    text.replace(/^\w/, (c) => c.toUpperCase());
  const getCategoryFromPathname = (category) => {
    const [, , categoryName] = category.split("/");
   
    
    return categoryName;
  };
  const { info, status, getData } = useFetch({
    url: `https://fakestoreapi.com/products/category/${getCategoryFromPathname(
      pathname.toLowerCase()
    )}`,
  });

  
  useEffect(() => {
    getData(),
    setCategory(getCategoryFromPathname(pathname))
    
  }, [pathname]);
 
  
  
  

  return (
    <div>
      {status === REQUEST_STATUS.LOADING && <div className="lds-ring"><div></div><div></div><div></div><div></div></div>}
      {status === REQUEST_STATUS.SUCCESS && (
        <div>
          {info.length === 0 ? (
            <NotFoundPage errorMessage="IT SEEMS THAT THE CATEGORY YOU ARE LOOKING FOR DOES NOT EXIST"/>
          ) : (
            <div className="product-info-container">
              <h3 className="category-title">
                Estos son los resultados de{" "}
                {decodeURI(capitalizeFirstLetter(category))}
              </h3>
              <div className="items-container">
                
                  {info.map(item => {
                    return (
                      <ProductCard title={item.title} key={item.id} imgSrc={item.image} hidden description={item.description} price={item.price}  id={item.id} category={item.category}  />
                    )
                  })}
                
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
