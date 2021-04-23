import React, { useEffect, useState } from 'react'
 import Loader from 'react-loader-spinner'


import Header from './components/Header';
import Main from './components/Main';
import Basket from './components/Basket';

const App = () => {

   let apiKey = 'e2fc984542944254a3ff7b6fe1e553ab'
   //apiKey = '3adcaf7fdc8f400f84ae38d0eafa4a75'
   //apiKey = 'cbac52df41214743a4dabcacf89b4226'
   //apiKey = 'c63e3cb004bf4b62a30b3332ed3895ae'
  const [data, setData] =useState([]);
  const [s, setS] =useState('f');

  const myHeaders = new Headers();
   myHeaders.append("Cookie", "__cfduid=d60e0b933fe4892156afca9fbf10fafde1610629643");

    const  requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};
  
  const getData = () =>

  fetch(`https://api.spoonacular.com/food/products/search?query=${s}&number=6&apiKey=${apiKey}`, requestOptions)
      .then((res) => res.json())

  useEffect(() => {
    getData().then((data) => setData(data.products ))
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
