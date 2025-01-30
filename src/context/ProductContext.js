import React ,{createContext, useEffect, useState} from 'react'

export const ProductContext = createContext();

export const ProductProvider = ({children})=> {
  const [product , setProduct] = useState(()=>{
    const items = JSON.parse(localStorage.getItem('product'));
    return items || [];
  });
  useEffect(()=>{
    localStorage.setItem('product' , JSON.stringify(product));
  },[product]);
 
  useEffect(() => {
    (async function fetchProduct() {
        const url = "http://localhost:5000/product/";
        const options = {
            method: "GET",
            headers: {
              'Content-Type': "application/json",
            },
        };

        try {
            const resp = await fetch(url, options);
            if (!resp.ok) {
                throw new Error(`HTTP error: ${resp.status}`);
            }
            const data = await resp.json();
            const {products}= data;
            console.log(products)
            // const [{ products }] = data;
            setProduct(products);
        } catch (err) {
            console.error(err);
        }
    })();
}, []);
  

  return (
    <ProductContext.Provider value={product}>
        {children}
    </ProductContext.Provider>
  )
}
