import React, { useState } from 'react';

import pastrySample from './latte.jpg';
import latte from './latte.jpg';
import cappuccino from './capuccino.jpg';
import americano from './americano.jpg';
import espresso from './espresso.jpg';
import mocha from './mocha.jpg';
import macchiato from './macchiato.jpg';
import irishCoffee from './irish coffee.jpg';
import flatWhite from './flat white.jpg';
import affogato from './affogato.jpg';
import doppio from './doppio.jpg';
import croissant from './croissant.jpg';
import danish from './danish.jpg';
import scone from './scone.jpg';
import muffin from './muffin.jpg';
import bagel from './bagel.jpg';
import cinnamonRoll from './cinnamon roll.jpg';
import turnover from './turnover.jpg';
import biscotti from './biscotti.jpg';
import coffeeCake from './coffee cake.jpg';
import bundtCake from './bundt cake.jpg';

function CoffeeWidget(props) {
    
    const nameMap = {
        1: "Latte",
        2: "Cappuccino",
        3: "Americano",
        4: "Espresso",
        5: "Mocha",
        6: "Macchiato",
        7: "Irish Coffee",
        8: "Flat White",
        9: "Affogato",
        10: "Doppio",
        11: "Croissant",
        12: "Danish",
        13: "Scone",
        14: "Muffin",
        15: "Bagel",
        16: "Cinnamon Roll",
        17: "Turnover",
        18: "Biscotti",
        19: "Coffee Cake",
        20: "Bundt Cake",
    };
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
    const imageMap = {
        1: latte,
        2: cappuccino,
        3: americano,
        4: espresso,
        5: mocha,
        6: macchiato,
        7: irishCoffee,
        8: flatWhite,
        9: affogato,
        10: doppio,
        11: croissant,
        12: danish,
        13: scone,
        14: muffin,
        15: bagel,
        16: cinnamonRoll,
        17: turnover,
        18: biscotti,
        19: coffeeCake,
        20: bundtCake,
    };

    const [amount, setAmount] = useState(props.amount);

    const handleIncrease = () => {
        setAmount(amount + 1);
    };

    const handleDecrease = () => {
        if (amount > 1) {
            setAmount(amount - 1);
        }
    };

    return (
        <div className="bg-yellow-100 p-4 rounded-lg shadow-md flex justify-center">
          {props.index in imageMap && (
            <div>
            {props.showImage && ( 
              <img
                src={imageMap[props.index]}
                alt="Coffee"
                className="mt-2 rounded-md"
                style={{ width: "150px", height: "150px" }}
              />
            )}
              <p className="text-lg font-semibold mt-4">{nameMap[props.index]}</p>
              
              {
                props.showAmount && (
                    <p className="text-lg mt-4">Amount: {props.showAmount}</p>
                )
              }

              {
                props.showTotal ? (
                    <p className="text-lg mt-4">Total Price: ${props.showTotal.toFixed(2)}</p>
                ) : (
                    <p className="text-lg mt-4">${priceMap[props.index]}</p>
                )
              }
              {props.showAdd && ( 
                <div>
                  <div className="flex items-center mt-4">
                    <button className="border border-black py-2 px-4 rounded-lg mr-2" onClick={handleDecrease}>-</button>
                    <p className="text-lg">{amount}</p>
                    <button className="border border-black py-2 px-4 rounded-lg ml-2" onClick={handleIncrease}>+</button>
                  </div>
                  <button className="border border-black py-2 px-4 rounded-lg mt-4" onClick={() => props.addToCart(props.index, amount)}>Add to Cart</button>
                </div>
              )}
            </div>
          )}
        </div>
      );      
}

export default CoffeeWidget;
