import React from 'react';
import { useNavigate } from 'react-router-dom';

const ChildrenModule = () => {
    const navigate = useNavigate();

    return (
        <div className="text-center mt-10">
            <h2>Welcome to the Children's Module</h2>
            <button onClick={() => navigate('/roles')} className="bg-gray-500 text-white px-4 py-2 mt-4">Back</button>
        </div>
    );
};

export default ChildrenModule;
