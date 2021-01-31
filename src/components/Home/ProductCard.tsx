import React from 'react';
import { useSelector } from 'react-redux';
import { ProductsItem } from '../../store/store';
import { Card, CardGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import { add, store } from '../../store/AppSlice';



export default function ProductCard() {
    const products = useSelector((state: ProductsItem[]) => state)
    console.log(products);
    


  return (
      <> 
         <div className="heading">
        <h1 style={{textAlign: "center", marginTop: "40px"}}>New Arrivals</h1>
        <hr />
      </div>
      <CardGroup>
  <Card>
    <Card.Img variant="top" src={products[0].imgUrl} />
    <Card.Body>
      <Card.Title>{products[0].name}</Card.Title>
      <Card.Text>
      {products[0].description}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Button variant="outline-primary" onClick={() => store.dispatch(add(products[0]))}>ADD TO CART</Button>{' '}
        <span style={{float:"right", fontSize:"20px"}}> <strong> ${products[0].price} </strong></span>

    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={products[1].imgUrl} />
    <Card.Body>
      <Card.Title>{products[1].name}</Card.Title>
      <Card.Text>
      {products[1].description} {' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Button variant="outline-primary"  onClick={() => store.dispatch(add(products[1]))}>ADD TO CART</Button>{' '}
    <span style={{float:"right", fontSize:"20px"}}> <strong> ${products[1].price} </strong></span>

        </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={products[2].imgUrl}/>
    <Card.Body>
      <Card.Title>{products[2].name}</Card.Title>
      <Card.Text>
      {products[2].description}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Button variant="outline-primary"  onClick={() => store.dispatch(add(products[2]))}>ADD TO CART</Button>{' '}
    <span style={{float:"right", fontSize:"20px"}}> <strong> ${products[2].price} </strong></span>
    </Card.Footer>
  </Card>
</CardGroup>
</>
  );
}
