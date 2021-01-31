import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { ProductsItem } from './store/store';
import { useSelector } from 'react-redux';
import "./NavBar.css"
import icon from "../src/images/perfume.png"
import Badge from '@material-ui/core/Badge';
// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& > *': {
//       margin: theme.spacing(1),
//     },
//   },
// }));


export default function NavBar() {
  // const classes = useStyles();
 const products = useSelector((state: ProductsItem[]) => state)
 const total = products.reduce((prev, item) =>  prev + item.price * item.quantity,0)

  return (
    <div id="navbar">
      <AppBar position="static" style={{ background: "#0f3057", flex: 1 }}>
        <Toolbar>
        
          <Typography variant="h6" className="title"  style={{ flex: 1}}>
          <img src={icon} alt="logo"  width="40px" height="40px"/><span className="logo">eFragrance Store</span>
          </Typography>
          <div className="nav-link">
          <Link to="/">
          <Button color="inherit">Home</Button>
          </Link>
          <Link to="/products">
          <Button color="inherit">Products</Button>
          </Link>
          <Link to="/cart">
          <Button color="inherit">
          <Badge badgeContent={total <= 1 ? 0 : `$${total}` } color="primary">
          Cart
      </Badge></Button>
          </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
