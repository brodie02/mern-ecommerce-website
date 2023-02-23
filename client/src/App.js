import React from 'react';
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
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Nav />
          <Routes>
            <Route 
              path="/"
              element={<Home />}
            />
            <Route 
              path="/products/:id"
              element={<ProductPage />}
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
