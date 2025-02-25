import React from 'react'

const CartItem = ({item, onUpdateCart, onRemoveFromCart}) => {
  return (
    <div className='cart-item'>
        <h3> {item.name} </h3>
        <h3> {item.price} </h3>
        
        <div className='cart-buttons'>
            <input type="text" value={item.quantity} onChange={(e) => onUpdateCart(item, e.target.value)}/>
            <button onClick={(e) => onRemoveFromCart(item)}> Remover </button>
        </div>

    </div>
  )
}

export default CartItem