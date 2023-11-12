import CoffeeWidget from "./components/CoffeeWidget";
import { useContext } from "react";
import { UserContext } from './UserContext';
import { Link } from 'react-router-dom';

function Checkout() {
    const { userData } = useContext(UserContext);

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

    const itemCount = userData.cart.reduce((acc, item) => {
        if (!acc[item]) {
            acc[item] = 1;
        } else {
            acc[item]++;
        }
        return acc;
    }, {});

    const totalSum = Object.keys(itemCount).reduce((acc, item) => {
        return acc + itemCount[item] * parseFloat(priceMap[item]);
    }, 0);

    return (
        <div className="p-4 bg-orange-950 flex-grow h-screen">
            <div className="flex justify-between bg-yellow-100 p-4 rounded-lg" style={{ marginBottom: '1rem' }}>
                <div>
                    <h1 className="text-3xl font-bold ">Noah's Coffee Shop</h1>
                </div>
                <div>
                    <Link to="/login" className="mr-4">
                        <button className="py-2 px-4 rounded-lg bg-orange-950 text-yellow-100">Sign In</button>
                    </Link>
                    <Link to="/">
                        <button className="py-2 px-4 rounded-lg bg-orange-950 text-yellow-100">Order</button>
                    </Link>
                </div>
            </div>

            <header className="App-header">
                <div>
                    <h2 className="text-xl font-bold py-2 text-yellow-100">Your Cart:</h2>
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
                <div className="text-xl font-bold py-2 text-yellow-100" style={{ marginBottom: '1rem' }}>
                    <h3 >Total Price: ${totalSum.toFixed(2)}  </h3>
                    <h3 >Total Tax: ${(totalSum * 0.07).toFixed(2)}</h3>
                    <h3 >Total Price with Tax: ${(totalSum * 1.07).toFixed(2)}</h3>
                </div>
                <div className="flex">
                    <button className="py-2 px-4 rounded-lg bg-yellow-100">Order Now</button>
                </div>
            </header>
        </div>
    );
}

export default Checkout;
