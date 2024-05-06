import React from 'react';
import Product from './Product';

function App() {
  
  let options = ["Hi-tech", "Durable", "Fast"];

  return (
    <div>
      <Product title="Laptop" price={45000} features={options}/>
      <Product title="Phone" price={15000} features={options}/>
      <Product title="Camera" price={35000} features={options}/>
    </div>
  )
}

export default App;