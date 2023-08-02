import "./styles.css";
import { MainPage } from "./pages/MainPage/MainPage";
import { Routes, Route, Router } from "react-router-dom";
import { ProductInfo } from "./pages/productInfo/ProductInfo";
import { SpecificProduct } from "./pages/SpecificProductDetails/SpecificProduct";
import { AllCategories } from "./pages/AllCategories/AllCategories";

export const EcommerceApp = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}>
        <Route index element={<AllCategories />} />

        <Route path="/productInfo/:category" element={<ProductInfo />} />
        <Route
          path="/product-details/:category/:itemID"
          element={<SpecificProduct />}
        />
      </Route>
    </Routes>
  );
};
