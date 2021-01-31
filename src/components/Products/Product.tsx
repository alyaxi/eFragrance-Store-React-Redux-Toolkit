import React from "react";
import { useSelector } from "react-redux";
import { ProductsItem } from "../../store/store";
import { Link } from "react-router-dom";
import { add, store } from "../../store/AppSlice";
import "./Product.css";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { IconButton } from "@material-ui/core";
import Footer from "../Footers/Footer";

export default function Product() {
  const Products = useSelector((state: ProductsItem[]) => state);

  return (
    <>
      <div className="heading">
        <h1>Products</h1>
        <hr />
      </div>
      <div id="products">
        {Products.map((item) => (
          <div key={item.id} className="card">
            <Link to={`/products/${item.id}`}>
              <img
                src={item.imgUrl}
                alt="perfume"
                width="200px"
                height="200px"
              />
            </Link>
            <div className="content">
              <h3>
                <Link to={`/products/${item.id}`}>{item.name}</Link>
              </h3>
              <p>
                Brand: <strong>{item.brand}</strong>
              </p>
              <p>
                Launched in <strong>{item.launched}</strong>
              </p>
              <p>
                Size: <strong>{item.size}</strong>
              </p>
              <span>
                Price: <strong>${item.price}</strong>
              </span>
              <IconButton
                disabled={item.added}
                color="primary"
                aria-label="add to shopping cart"
                onClick={() => store.dispatch(add(item))}
              >
                <AddShoppingCartIcon />
              </IconButton>
            </div>
          </div>
        ))}
      </div>
      <Footer/>
    </>
  );
}
