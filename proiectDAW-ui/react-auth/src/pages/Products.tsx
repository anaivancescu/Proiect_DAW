import React, {useEffect, useState} from 'react';
import ProductCard from "../components/ProductCard";
import {ProductModel} from "../models/Product.model";

const Products = () => {
    const [productList, setProductList] = useState<ProductModel[]>([]);

    useEffect(()=>{(
        async () => {const response= await fetch("http://localhost:5000/api/products", {
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
        });
            const content= await response.json();


            setProductList(content)


        }

    ) ()
    },[])

    return (

        <div className="text-center bg-light">

                <div className="container ">
                    <div className="row" >
                    {productList.map((item,index)=>
                        <ProductCard title={item.title} description={item.description} id={item.id} price={item.price} category={'haine'}/>
                    )}
                    </div>

                </div>

        </div>

    )
}
export default Products;
