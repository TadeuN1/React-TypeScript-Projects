import { useState, useEffect } from "react"
import productsData from  '../data/products.json'
import Product from "./Product"

const Catalogo = ({onAddToCart}) => {


    return (
    <div>
    <h1>Catálogo de Produtos</h1>
    
    <div className="products-container">
        {productsData.map((product) => (
            <Product key={product.id} product={product} onAddToCart={onAddToCart}/>
        ))}
    </div>
    
    
    </div>
  )
}

export default Catalogo