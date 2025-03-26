/*import React, { useState } from 'react';
import { login } from '../../services/authService';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await login(email, password);
            if (response.status === 200) {
                navigate('/roles'); // Redirect to role selection after successful login
            }
        } catch (error) {
            console.error('Login failed', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="p-4">
            <input type='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)} required className="block mb-2" />
            <input type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} required className="block mb-2" />
            <button type='submit' className="bg-blue-500 text-white px-4 py-2">Login</button>
        </form>
    );
};

export default Login;
*/
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../services/authService';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await login(email, password);
            if (response.status === 200) {
                navigate('/roles'); // Redirect after successful login
            }
        } catch (error) {
            console.error('Login failed', error);
            alert('Invalid credentials');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="p-4">
            <input type='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)} required className="block mb-2" />
            <input type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} required className="block mb-2" />
            <button type='submit' className="bg-blue-500 text-white px-4 py-2">Login</button>
        </form>
    );
};

export default Login;
