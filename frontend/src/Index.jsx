import CoffeeWidget from './components/CoffeeWidget';
import { Link } from 'react-router-dom';
import { UserContext } from './UserContext';
import React, { useContext } from 'react';

function Index() {
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

  const coffeeIndexes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const pastryIndexes = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

  const { userData, setUserData } = useContext(UserContext);

  const addToCart = (item, amount) => {
    const itemsToAdd = Array(amount).fill(item);
    const updatedCart = [...userData.cart, ...itemsToAdd];

    setUserData((prevUserData) => ({
      ...prevUserData,
      cart: updatedCart,
    }));
  };

  const totalPrice = userData.cart.reduce((total, item) => {
    return total + parseFloat(priceMap[item]);
  }, 0);

  const itemCount = userData.cart.reduce((acc, item) => {
    if (!acc[item]) {
        acc[item] = 1;
    } else {
        acc[item]++;
    }
    return acc;
}, {});

  return (
    <div className="p-4 bg-orange-950">
      <div className="flex justify-between bg-yellow-100 p-4 rounded-lg" style={{ marginBottom: '1rem' }}>
        <div>
          <h1 className="text-3xl font-bold ">Noah's Coffee Shop</h1>
        </div>
        <div>
          <Link to="/login" className="mr-4">
            <button className="py-2 px-4 rounded-lg bg-orange-950 text-yellow-100">Sign In</button>
          </Link>
          <Link to="/checkout">
            <button className="py-2 px-4 rounded-lg bg-orange-950 text-yellow-100">Checkout</button>
          </Link>
        </div>
      </div>

      <div>
                    <h2 className="text-xl font-bold py-2 text-yellow-100">Your Cart:</h2>
                    <h2 className="text-xl font-bold py-2 text-yellow-100">Total Price: ${totalPrice.toFixed(2)}</h2>
                    <div className="grid grid-cols-5 gap-8 p-4">
                        {Object.keys(itemCount).map((item, index) => (
                            <CoffeeWidget
                                key={index}
                                index={parseInt(item)}
                                amount={itemCount[item]}
                                showImage={false}
                                showTotal={itemCount[item] * parseFloat(priceMap[item])}
                                showAmount={itemCount[item]}
                                showAdd={false}
                            />
                        ))}
                    </div>
        </div>

      <h1 className="text-3xl font-bold text-yellow-100">Beverages</h1>
      <div className="grid grid-cols-5 gap-8">
        {coffeeIndexes.map((index) => (
          <CoffeeWidget key={index} index={index} amount={1} showAdd={true} showImage={true} addToCart={addToCart} />
        ))}
      </div>

      <h1 className="text-3xl font-bold text-yellow-100">Pastries</h1>
      <div className="grid grid-cols-5 gap-8">
        {pastryIndexes.map((index) => (
          <CoffeeWidget key={index} index={index} amount={1} showAdd={true} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default Index;
