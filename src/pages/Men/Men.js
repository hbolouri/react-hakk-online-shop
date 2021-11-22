
import React from "react";
import "./Men.css";
import { menClothes, womenClothes, kidsClothes } from "../../api/products";
import allClothes from "../../api/products";
import Products from "../../components/Section/Products";
import Section from "../../components/Section/Section";

export default function Men() {
  return (
    <main>
      <Section title="Men's Collection" data={menClothes} />
      <div className="images-parent">
        <div className="image-left">
          <div className="image-text">
            <h1 style={{ color: "white" }}>A Chill Season ~</h1>
            <h5 style={{ color: "white" }}>
              Effortless design to wear anywhere
            </h5>
            <button className="btn-image">SHOP NOW</button>
          </div>
        </div>
        <div className="image-right"></div>
      </div>
      <Products title="All Products" data={allClothes} />
    </main>
  );
}


