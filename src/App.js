import React, { useEffect, useState } from 'react'
 import Loader from 'react-loader-spinner'


import Header from './components/Header';
import Main from './components/Main';
import Basket from './components/Basket';

const App = () => {


  const [data, setData] =useState([]);

  


  

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((data) => setData(data))
      setData(data)
  }, [])


  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
    
  //const  {products} = [...data]
    
    const [cartItems, setCartItems] = useState([]);
         
             return (data? 
   <div>
       <Header countCartItems={cartItems.length}></Header>
       <div class="container-fluid">
      
               <div class="row mt-5">
               
       <Main data={data} onAdd={onAdd}></Main>
       <Basket
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}></Basket>
    </div>
    </div>
    </div>
    : <div className="loader">   <Loader
         type="Puff"
         color="#00BFFF"
         height={300}
         width={200}
         
      /></div>
   );   }
  

export default App;
