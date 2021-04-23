import React from 'react';

export default function Product(props) {
  const { product, onAdd } = props;
  return (

<div>
                
  <img src={product.image} class="card-img-top" alt={product.name} />
  <div class="card-body text-center">

    <p class="card-text">{product.title}</p>
      <p class="card-text">${product.id}</p>
        <button type="button" class="btn btn-primary" onClick={() => onAdd(product)}>Add To Cart</button>
</div>
</div>
    
  
  );
}