import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="p-4 bg-blue-600 text-white">
            <Link to="/login" className="mr-4">Login</Link>
            <Link to="/register">Register</Link>
        </nav>
    );
};

export default Navbar;
