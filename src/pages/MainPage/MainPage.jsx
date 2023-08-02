import React, { useState } from "react";
import logo from "../../assets/Logo.png";

import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import "../../styles.css";
import { useFetch } from "../../utilites/useFetch";
import { Outlet, useNavigate } from "react-router";

export const MainPage = () => {
  const [statusSearchBar, setStatusSearchBar] = useState(false);
  const { data, getData } = useFetch({
    url: `https://fakestoreapi.com/products/category/`,
    defaultVal: [],
  });
  const navigate = useNavigate()

  const handleSearchCategory = (category) => {
    getData(`https://fakestoreapi.com/products/category/${category}`);
    console.log(data);
  };

  const handleTogglerButton = () => {
    setStatusSearchBar((status) => !status);
  };

  const returnMenu = ()=>{
    navigate("/")

  }

  return (
    <div className="container">
      <header>
        <img className="logo" src={logo} alt="" onClick={returnMenu}/>
        <Input
          status={statusSearchBar}
          placeholder="Search a category"
          onSearch={handleSearchCategory}
        />
        <Button buttonText="Log-in" variant="standard" size="sm" />
        <Button
          onClick={handleTogglerButton}
          buttonText={<span className="material-symbols-outlined">search</span>}
        />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
