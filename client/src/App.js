import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from '@apollo/client';

import Nav from './components/Nav';
import Home from './pages/Home'
import ProductPage from './pages/ProductPage'
import Signup from './pages/Signup'



const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  const [cart, setCart] = useState([])
  console.log(cart);

  const addItemToCart = (item) => {
    setCart((prev) => {
      const isItemInCart = prev.find((i) => i._id === item._id)

      if (isItemInCart) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, amount: i.amount + 1 } : i
        )
      }

      return [...prev, { ...item, amount: 1 }]
    })
  }

  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Nav />
          <Routes>
            <Route 
              path="/"
              element={<Home addItemToCart={addItemToCart}/>}
            />
            <Route 
              path="/products/:id"
              element={<ProductPage addItemToCart={addItemToCart}/>}
            />
            <Route 
              path="/signup"
              element={<Signup />}
            />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
