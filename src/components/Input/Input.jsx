import React, { useEffect, useRef, useState } from "react";
import "./input.css";
import { Button } from "../Button/Button";
import { useFetch } from "../../utilites/useFetch";
import { getCategories } from "../../utilites/getCategories";
import { useLocation, useNavigate } from "react-router";

export const Input = ({
  placeholder = "ola",
  type = "text",
  status = true,
}) => {
  const [categories, setCategories] = useState([]);
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [hidden, setHidden] = useState(false);

  const inputRef = useRef();
  

  const capitalizeFirstLetter = (text) =>
    text.replace(/^\w/, (c) => c.toUpperCase());

  const navigate = useNavigate();

  const allCategories = async () => {
    const data = await getCategories();

    setCategories(data);
    console.log(categories);
  };

  const handleChangeValue = ({ target }) => {
    setValue(target.value.trim());

    const filteredSuggestions = categories.filter((category) =>
      category.toLowerCase().includes(target.value.toLowerCase())
    );

    if (target.value.length > 0) {
      console.log("filtrandoo....");
      setSuggestions(filteredSuggestions);
    } else {
      console.log("vacio!");
      setSuggestions([]);
    }
  };

  const autoCompleteCategory = ({ target }) => {
    const valueTest = target.textContent;

    setValue(valueTest);
    setSuggestions([]);

    if (inputRef.current) {
      setTimeout(() => {
        inputRef.current.focus();
      }, 0);
    }
  };

  useEffect(() => {
    allCategories();
  }, []);

  const searchCategory = (event) => {
    event.preventDefault();
    if (value === "") {
      return;
    }
    navigate(`/productInfo/${value}`);

    setValue("");
  };

  return (
    <form action="" onSubmit={searchCategory}>
      <label
        htmlFor="searchInput"
        className={`${status ? "label--search-open" : ""}`}
      >
        <input
          ref={inputRef}
          className={`input--search `}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={handleChangeValue}
          onBlur={() => setHidden(false)}
          onFocus={() => setHidden(true)}
        />
        <Button
          buttonText={<span className="material-symbols-outlined">search</span>}
        />
      </label>
      {suggestions.length > 0 ? (
        <ul className={`autocomplete ${!hidden ? `autocomplete-hidden` : ""}`}>
          {suggestions.map((suggestion) => (
            <li key={suggestion} onMouseDown={autoCompleteCategory}>
              {capitalizeFirstLetter(suggestion)}
            </li>
          ))}
        </ul>
      ) : null}
    </form>
  );
};
