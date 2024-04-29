import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import Cart from './components/Cart';
import { Provider } from 'react-redux';
import store from './store/store';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <div style={{ 
          backgroundImage: 'url(/images/back.jpg)', 
          backgroundSize: 'cover', 
          minHeight: '100vh',
          minHeight: '100vh',
          textAlign: 'center', // Center align text
          color: 'white', // Text color
          padding: '20px', // Padding for text
          // Adjust the margin as needed
        }}>
          <div style={{ position: 'absolute', top: '50%', right: '20%', transform: 'translateY(-50%)' }}>
            <h1 style={{ color: 'black' }}>Beauty Products and Cosmetics</h1>
            <p style={{ color: '#fff', fontSize: '24px' }}>Premium Cosmetics Collection</p>
            <p style={{ color: '#fff', fontSize: '20px' }}>Hurry up!!!</p>
          </div>

          {/* Content below the navbar and above the cards */}
        </div>
        <h1 style={{ textAlign: 'center', marginTop: '20px' }}>Products</h1>
        <Home />
        <Footer />
        <Cart />
      </div>
    </Provider>
  );
};

export default App;
