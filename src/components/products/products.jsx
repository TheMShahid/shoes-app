import React from "react";
import Product from "../product/product";

import "./products.css";
import "../../global.css";

class Products extends React.Component {
  constructor() {
    super();

    this.state = {
      products: [
        {
          id: 1,
          productImg: require("../../assets/s1.jpg"),
          productTitle: "Ginger Peach tea",
          productPrice: "$7.88",
        },
        {
          id: 2,
          productImg: require("../../assets/shoes2.jpg"),
          productTitle: "White tea",
          productPrice: "$4.33",
        },
        {
          id: 3,
          productImg: require("../../assets/shoes5.jpg"),
          productTitle: "fruit sangria",
          productPrice: "$6.23",
        },
      ],
    };
  }
  render() {
    return (
      <section className="products">
        <div className="section-center clearfix">
          <article className="products-info">
            <div className="section-title">
              <h3>check out</h3>
              <h2>our products</h2>
            </div>
            <p className="products-text">
              loreme and product information for your website and website
              website website is available at http
            </p>
            <a className="btn" href="products.html">
              inventory
            </a>
          </article>
          <article className="products-inventory clearfix">
            {this.state.products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </article>
        </div>
      </section>
    );
  }
}

export default Products;
