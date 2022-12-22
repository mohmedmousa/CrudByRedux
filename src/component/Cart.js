import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { clearcart, deletecart } from '../rtk/slices/cartSlice';
import { Container } from 'react-bootstrap';

function Cart(){
  let  products=useSelector((state)=>state.cart)
  //localStorage.setItem('localpro',JSON.stringify(products))
  products=products.length>1 ? [...products].sort((a, b) => a.id - b.id):products
  const dispatch=useDispatch()
  console.log(products.length)
  let total_price=0
  for(let i=0 ; i < products.length ; i++){
    total_price+=products[i].price*products[i].quantity
  }


   return(
    <Container className='pt-5'>
    <h1>Your selected products</h1>
    <Button variant="primary" className='mb-2' onClick={()=>dispatch(clearcart())}>clear All</Button> 
    <Button variant="primary" className='mb-2 mx-5'>Total price : {total_price.toFixed(1)}$</Button> 
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Description</th>
          <th>img</th>
          <th>price</th>
          <th>quantity</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        
         {products.map((product)=>
          <tr key={Math.random()}>
          <td>{product.id}</td>
          <td>{product.title}</td>
          <td>{product.description}</td>
          <td><img src={product.image} alt=''style={{width:"100px" ,height:"100px"}}/></td>
          <td>{product.price}$</td>
          <td>{product.quantity}</td>
          <td><Button variant="danger" onClick={()=>dispatch(deletecart(product))}>Delete one</Button>
</td>
        </tr>)}
         
       
      </tbody>
    </Table>
    </Container>
   )
}
export default Cart;