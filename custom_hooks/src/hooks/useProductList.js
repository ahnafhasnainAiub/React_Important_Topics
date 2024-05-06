import { useEffect, useState } from 'react';

  export const useProductList = () => {
 
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        const productList = await fetch('https://fakestoreapi.com/products');
        const productListjson = await productList.json();
    
        setProducts(productListjson);
    }

    useEffect(() => {
        getProducts();
    }, [])


    return { products }; //object return

}
