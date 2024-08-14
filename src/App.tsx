import React, { useEffect, useState } from 'react';
import { Product } from './types';

function App() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetch('http://localhost:3001/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <div className="App">
            <h1>Products</h1>
            {products.map(product => (
                <article key={product.title}>
                    <h4>{product.title}</h4>
                    <p>{product.price}</p>
                    <p>{product.discount}</p>
                    <p>{product.state}</p>
                </article>
            ))}
        </div>
    );
}

export default App;
