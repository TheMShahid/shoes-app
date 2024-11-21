import React from "react";

import "./product.css";
import "../../global.css";

const Product = (props) => (
  <>
    <div className="product">
      <img
        src={props.product.productImg}
        alt={props.product.productTitle}
        className="product-img"
      />
      <h4 className="product-title">{props.product.productTitle}</h4>
      <h4 className="product-price">{props.product.productPrice}</h4>
    </div>
  </>
);

export default Product;
