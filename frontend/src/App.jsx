import React, { useState } from 'react';
import CoffeeWidget from './components/CoffeeWidget';

function App() {

  const priceMap = {
    1: "2.99",
    2: "3.49",
    3: "2.49",
    4: "1.99",
    5: "3.99",
    6: "3.49",
    7: "4.99",
    8: "3.99",
    9: "4.49",
    10: "2.49",
    11: "1.99",
    12: "2.49",
    13: "1.99",
    14: "2.99",
    15: "1.49",
    16: "2.99",
    17: "2.49",
    18: "1.99",
    19: "3.49",
    20: "2.99",
};

    const coffeeIndexes = [1, 2, 3, 4, 5, 6, 7, 8, 9,10];
    const pastryIndexes = [11, 12, 13, 14, 15, 16, 17, 18,19,20];
    
    const [cart, setCart] = useState([]);

    const addToCart = (item, amount) => {
      const itemsToAdd = Array(amount).fill(item);
      setCart([...cart, ...itemsToAdd]);
    };

    const totalPrice = cart.reduce((total, item) => {
      return total + parseFloat(priceMap[item]);
    }, 0);

    return (
    <div className="p-4 bg-orange-950">
        <div className="flex justify-between bg-yellow-100 p-4 rounded-lg" style={{ marginBottom: '1rem' }}>
          <div>
            <h1 className="text-3xl font-bold ">Noah's Coffee Shop</h1>
          </div>
          <div>
            <button className="py-2 px-4 rounded-lg mr-4 bg-orange-950 text-yellow-100">Sign In</button>
            <button className="py-2 px-4 rounded-lg bg-orange-950 text-yellow-100">Checkout</button>
          </div>
        </div>

        <h1 className="text-3xl font-bold text-yellow-100">Beverages</h1>
        <h2 className="text-xl font-bold py-2 text-yellow-100">Total Price: ${totalPrice.toFixed(2)}</h2>
        <div className="grid grid-cols-5 gap-8">
          {coffeeIndexes.map((index) => (
            <CoffeeWidget key={index} index={index} amount={1} addToCart={addToCart} />
          ))}
        </div>

        <h1 className="text-3xl font-bold text-yellow-100">Pastries</h1>
        <div className="grid grid-cols-5 gap-8">
          {pastryIndexes.map((index) => (
            <CoffeeWidget key={index} index={index} amount={1} addToCart={addToCart} />
          ))}
        </div>
      </div>
    );
  }
  export default App;
