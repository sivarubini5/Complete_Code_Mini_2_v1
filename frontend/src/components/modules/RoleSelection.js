import React from 'react';
import { useNavigate } from 'react-router-dom';

const RoleSelection = () => {
    const navigate = useNavigate();

    const handleRoleSelection = (role) => {
        if (role === 'women') {
            navigate('/women');
        } else if (role === 'children') {
            navigate('/children');
        }
    };

    return (
        <div className="text-center mt-10">
            <h2>Select Your Role</h2>
            <button onClick={() => handleRoleSelection('women')} className="bg-pink-500 text-white px-4 py-2 m-2">Women</button>
            <button onClick={() => handleRoleSelection('children')} className="bg-green-500 text-white px-4 py-2 m-2">Children</button>
        </div>
    );
};

export default RoleSelection;
