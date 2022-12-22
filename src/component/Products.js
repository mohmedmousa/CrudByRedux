import Container from "react-bootstrap/esm/Container";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from "react";
import { fetchProduct } from "../rtk/slices/products-slice";
import { addcart } from "../rtk/slices/cartSlice";


function Products(){
    const products = useSelector((state) => state.products)
    console.log(products)
    const dispatch= useDispatch()
    useEffect(()=>{
        dispatch(fetchProduct())
    },[])
    
    return(
    <>
        <Container>
            <div className="row pt-5 d-flex">
                
                    {products.slice(0,14).map((product)=>(
                    <div className="col-3 pt-3" key={product.id}>
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={product.image} style={{height:"200px"}} />
                        <Card.Body>
                            <Card.Title>{product.title.slice(0,30)}</Card.Title>
                            <Card.Text>
                                {product.description.slice(0,100)}
                        </Card.Text>
                        <Card.Title>{product.price}$</Card.Title>
                        <Button variant="primary" onClick={()=>dispatch(addcart(product))}> add cart</Button>
                    </Card.Body>
                </Card>
                </div>
                    ))}
                
                
            </div>
        </Container>
        
    )
    </>
    )
}
export default Products;