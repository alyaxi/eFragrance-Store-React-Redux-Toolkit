import React from 'react';
// import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import { ProductsItem } from '../../../store/store';
import "./empty.css";


export default function Empty() {
    // const Products = useSelector((state: ProductsItem[]) => state);
    // const total = Products.reduce((prev, item) =>  prev + item.price * item.quantity,0)
    return (
        <div className="container-fluid mt-100">
        <div className="row">
            <div className="col-md-12">
                <div className="card12">
                  
                    <div className="card-body cart">
                        <div className="col-sm-12 empty-cart-cls text-center"> <img src="https://i.imgur.com/dCdflKN.png" width="130" height="130" className="img-fluid mb-4 mr-3" alt="cart"/>
                            <h3><strong>Your Cart is Empty</strong></h3>
                            <h4>Add something to make me happy :)</h4> <Link to="/products" className="btn btn-primary cart-btn-transform m-3" data-abc="true">continue shopping</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
