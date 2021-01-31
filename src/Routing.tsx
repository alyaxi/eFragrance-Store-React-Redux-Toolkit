import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Carts from './components/Carts/Carts';
import Home from './components/Home/Home';
import Product from './components/Products/Product';
import NavBar from './NavBar';

export default function Routing() {
    return (
        <> 
        <Router>
            <NavBar/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/products" component={Product}/>
                <Route exact path="/cart" component={Carts}/>
            </Switch>
        </Router>
        </>
    )
}
