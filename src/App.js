import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import { ProductProvider } from "./ProductContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Success from "./Success";

const App = () => {
  return (
    <ProductProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<MainContent />} />
          <Route path="/success" element={<Success />} />
          <Route
            path="*"
            element={
              <h1
                style={{
                  textAlign: "center",
                  color: "crimson",
                  marginTop: "50px",
                }}
              >
                Please this page not found!!
              </h1>
            }
          />
        </Routes>
      </BrowserRouter>
    </ProductProvider>
  );
};

export default App;
