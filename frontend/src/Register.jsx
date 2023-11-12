import { useState } from "react";
import { Link } from 'react-router-dom';

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');

    const handleRegistration = () => {
        if (username && password && email && fullName) {
            console.log('Registration Successful');
            console.log(`Username: ${username}, Password: ${password}, Email: ${email}, Full Name: ${fullName}`);
        } else {
            console.log('Please fill out all fields');
        }
    };

    return (
        <div className="p-4 bg-orange-950 flex-grow h-screen">
            <div className="flex justify-between bg-yellow-100 p-4 rounded-lg" style={{ marginBottom: '1rem' }}>
                <div>
                    <h1 className="text-3xl font-bold ">Noah's Coffee Shop</h1>
                </div>
                <div>
                    <Link to="/order" className="mr-4">
                        <button className="py-2 px-4 rounded-lg bg-orange-950 text-yellow-100">Order</button>
                    </Link>
                    <Link to="/checkout">
                        <button className="py-2 px-4 rounded-lg bg-orange-950 text-yellow-100">Checkout</button>
                    </Link>
                </div>
            </div>

            <header className="App-header">
                <div>
                    <h2 className="text-xl font-bold py-2 text-yellow-100">Register</h2>
                    <div className="flex flex-col">
                        <h2 className="text-l font-bold py-2 text-yellow-100">Username</h2>
                        <input
                            className="p-2 rounded-lg bg-yellow-100 mb-4"
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <h2 className="text-l font-bold py-2 text-yellow-100">Password</h2>
                        <input
                            className="p-2 rounded-lg bg-yellow-100 mb-4"
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <h2 className="text-l font-bold py-2 text-yellow-100">Email</h2>
                        <input
                            className="p-2 rounded-lg bg-yellow-100 mb-4"
                            type="text"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <h2 className="text-l font-bold py-2 text-yellow-100">Full Name</h2>
                        <input
                            className="p-2 rounded-lg bg-yellow-100 mb-4"
                            type="text"
                            placeholder="Full Name"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                        />
                    </div>
                </div>
                <div className="flex space-x-2">
                    <button className="py-2 px-4 rounded-lg bg-yellow-100" onClick={handleRegistration}>Register</button>
                    <Link to="/login">
                        <button className="py-2 px-4 rounded-lg bg-yellow-100">Back to Login</button>
                    </Link>
                </div>
            </header>
        </div>
    );
}

export default Register;
