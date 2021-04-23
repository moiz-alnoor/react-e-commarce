import React from 'react';
import Product from './Product';

export default function Main(props) {
  const { data, onAdd } = props;
  return (
    
      <div class="col-sm-8 ">
            <div class="row">
             
        {data.map((product) => (
           <div class="col-4 mb-5">
                    <div class="card shadow-none p-3 mb-5 rounded">
          <Product key={product.id} product={product} onAdd={onAdd}></Product>
    </div> 
    </div>

       ))}
       </div>
    </div>
  );
}