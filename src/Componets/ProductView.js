import React from "react";
import "./ProductView.css";
import { useState } from "react";
import IncDecCounter from "./IncDecCounter";

function ProductView(props) {
  const [products1] = useState([
    {
      id: 1,
      image: "f1.jpg",
      name: "Maththi",
      price: "₹ 100",
      description:
        "It is widely considered the staple fish of Kerala. They are small, oily, nutritious and sometimes pocket friendly. ... People like the taste of this fish mainly due to the good amount of fish oil. Mathi fish was once considered the cheapest fish in Kerala.",
    },
  ]);

  const renderList = products1.map((product) => {
    const { id, image, price, name, description } = product;
    return (
      <div className="container">
        <div class="row media">
          <div className="itemview col-sm">
            <img className="align-self-start mr-3" src={image} />
          </div>
          <div className="itemview col-sm">
            <h3>{name}</h3>
            <h4 className="itemprice">{price}</h4>
            <p className="itemdesc">{description}</p>
          </div>
          <div class="row">

            <IncDecCounter />
          </div>
          <button type="button" class="btn btn-success">
            ADD TO CART
          </button>
        </div>
      </div>
    );
  });
  return <>{renderList}</>;
}

export default ProductView;
