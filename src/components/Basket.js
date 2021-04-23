import React from 'react';

export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
    return (
   <div class="col-4">
          <div class="row">
            <div class="col-12">
            <div class="list-group">
  <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
  {cartItems.length?  <div>Cart Items</div>  : <div>Cart is Empty</div>}
      </a>
              <div  class="list-group-item list-group-item-action">
        {cartItems.map((item) => (
          <div key={item.id}>
                <div >
                   {item.title}
                </div>
                <div class="col">
                  <br/>
                  <button class = "btn btn-outline-warning" onClick={() => onRemove(item)}>
                -
               </button>
                 <span> { item.qty} </span>
                 <button class = "btn btn-outline-warning" onClick={() => onAdd(item)}>
                +
              </button>
              <hr/>
              <br/>
                </div>
          
              </div>
         
        ))}
          </div>
        </div>
</div>
          </div>
         </div>
              
  )

}