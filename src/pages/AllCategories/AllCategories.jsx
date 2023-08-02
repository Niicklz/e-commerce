import React, { useEffect, useState } from 'react'
import banner from "../../assets/banner-image.png";
import { ProductContainer } from "../../components/ProductContainer/ProductContainer";
import { Button } from '../../components/Button/Button';
import { REQUEST_STATUS, useFetch } from '../../utilites/useFetch';
import { NotFoundPage } from '../NotFoundPage/NotFoundPage';
import { useNavigate } from 'react-router';
import { Loader } from '../../components/Loader/Loader';
import "./AllCategories.css"


export const AllCategories = () => {
  const navigate = useNavigate()
  const { status, getData } = useFetch({
    url:`https://fakestoreapi.com/products/category/electronics`,
    defaultVal: [],
  });

useEffect(()=> {
  getData()
}, [])

console.log(status);

  return (
    <div>
      {status === REQUEST_STATUS.ERROR && <NotFoundPage errorMessage="We have problems connecting to the server, please come back later!
"/>}
      {status === REQUEST_STATUS.LOADING && <div className="lds-ring"><div></div><div></div><div></div><div></div></div>}
      {status === REQUEST_STATUS.SUCCESS && <div>
        <section className="banner">
        <img src={banner} alt="" />
        <div className="banner-info">
          <h2 className="promo">July Promotional</h2>
          <p className="promo-description">
          All products in this category with discount!

          </p>
          <Button buttonText="View Electronics" variant="blue" size="sm" onClick={()=> navigate(`/productInfo/electronics`)}/>
        </div>
      </section>
      
     <main>
        <ProductContainer category="electronics" />
        <ProductContainer category="jewelery" />
        <ProductContainer category="men's clothing" />
        <ProductContainer category="women's clothing" />
      </main> 
        </div>}
        
      
    </div>
  )
}
