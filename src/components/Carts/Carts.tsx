import React from "react";
import { useSelector } from "react-redux";
import { ProductsItem } from "../../store/store";
import Empty from "./EmptyCardComp/Empty";
import "./Carts.css";
import CartTable from "./CartTable";
import { Button, Fade, Grid } from "@material-ui/core";
import PaymentIcon from "@material-ui/icons/Payment";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import Footer from "../Footers/Footer";

function Carts() {
  const Products = useSelector((state: ProductsItem[]) => state);
  const total = Products.reduce(
    (prev, item) => prev + item.price * item.quantity,
    0
  );

  return (
    <>
      <div className="heading">
        <h1>Shopping Cart</h1>
        <hr />
      </div>
      <div>
        {Products.filter((product) => product.added).length === 0 ? (
          <Empty />
        ) : (
          " "
        )}
      </div>
      {Products.filter((product) => product.added).length === 0 ? (
        " "
      ) : (
        <div style={{paddingBottom: "100px", }}>
          <div className="total-div">
            <div>
        
            </div>
            <h2 >
               Subtotal :
                        <Grid item xs={12} md={6} lg={4} className=" text-center ">
                            <div className="display-4 font-weight-bold py-2">
                                <CountUp
                                    start={0}
                                    end={total}
                                    duration={5}
                                    delay={2}
                                    separator=" "
                                    decimals={2}
                                    decimal="."
                                    prefix="$ "
                                    suffix=""
                                />
                            </div>
                        </Grid>
            </h2>
            <hr />
            <Button variant="outlined" color="primary">
              <span>
                <PaymentIcon />{" "}
              </span>{" "}
              CHECKOUT
            </Button>

            <Link to="/products">
              <Button>
                <span>
                  <ShoppingCartIcon />{" "}
                </span>
                CONTINUE SHOPPING
              </Button>
            </Link>
            <hr />
          </div>
          <CartTable />
        </div>
      )}
      <Footer/>
    </>
  );
}
export default Carts;
