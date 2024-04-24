import React from "react";
import Feature from "./components/Feature";
import Card from "./components/Card";
import Footer from "./components/Footer";
const page = () => {
  return (
    <>
      <div className="h-screen w-full">
        <Feature />
        <div
          className="cards w-full flex-wrap justify-center flex items-center gap-8 p-6"
          id="products"
        >
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default page;
