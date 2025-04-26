import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import axios from "axios";
import "./Home.css";

function Home() {
    const [products, setProducts]=useState(null);
    const [isLoading, setLoading]=useState(true);

    useEffect(()=>{
        axios
        .get("https://fakestoreapi.com/products")
        .then((res)=>{
            console.log(res.data);
            setProducts(res.data);
            setLoading(false);
            //updating products with the resultant array
        })
        .catch((err)=>{
            console.log(err);
        });
    },[]);
    if(isLoading){
        return <div>Loading...!</div>
    }
  return (
    <div>
        {console.log(products)}
        {products && (
            products.map((product)=>{
                console.log(product);
                return(<div className='product-display'>
                    <div className='product-item'>
                        <div className='img-div'>
                            <img src={product.image} alt='product'/>
                        </div>
                        <div className='desc-div'>
                        <h3>{product.title}</h3>
                        <p>Price:<b>&#8377;{product.price}</b></p>
                        <p>Category:{product.category}</p>
                        <p>Reviews: {product.rating.rate} of {product.rating.count}</p>
                        </div>
                    </div>
                </div>
                )
            }
        ))}
        </div>
        );
  
}

export default Home
