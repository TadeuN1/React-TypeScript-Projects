import React, { useState } from 'react'

const Product = ({product, onAddToCart}) => {

  const [quantity, setQuantity] = useState(1)

  return <div className='product'>
      <img src={product.image} alt={product.name} />
      <h3> {product.title} </h3>
      <p> R$ {product.price}</p>
      <div className='cart-buttons'>
        <select onChange={(e) => setQuantity(parseInt(e.target.value))}> 
        { [...Array(10).keys()].map((x) => (
          <option key={x + 1} value={x + 1}> {x + 1} </option>
        ))}
       </select>
       <button onClick={() => onAddToCart(product, quantity)}> Adicionar o carrinho </button>
      </div>
    </div>
  
}

export default Product