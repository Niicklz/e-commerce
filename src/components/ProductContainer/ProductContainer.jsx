import { useEffect, useState } from "react";
import { ProductCard } from "../ProductCard/ProductCard";
import { getArticles } from "../../utilites/getArticles";
import "./productContainer.css";
import arrowIcon from "../../assets/arrow_back_black_24dp 1.svg";
import { REQUEST_STATUS, useFetch } from "../../utilites/useFetch";
import { Loader } from "../Loader/Loader";
import { Link } from "react-router-dom";

export const ProductContainer = ({ category }) => {
  const { info, status, getData } = useFetch({
    url:`https://fakestoreapi.com/products/category/${category}`,
    defaultVal: [],
  });

useEffect(()=> {
  getData()
}, [])



  return (
    <div className="main-container">
      <div className="category-and-show-more-container">
        <h2 className="category">{category[0].toUpperCase() + category.substring(1)}</h2>
        <Link to={`productInfo/${category}`}> Show all <img className="arrow" src={arrowIcon} alt="" /></Link>
      </div>

      <div className="products-container">
        {status === REQUEST_STATUS.LOADING? <div className="loader-container"><Loader/><Loader/><Loader/><Loader/></div>:info.map((item) => (
          <ProductCard
          key={item.id}
          title={item.title}
          imgSrc={item.image  }
          price={item.price}
          id={item.id}
          category={item.category}
            
          />
          
        )) }
        
      </div>
    </div>
  );
};



