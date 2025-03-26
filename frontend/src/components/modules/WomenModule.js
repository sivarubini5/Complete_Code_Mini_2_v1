
// workng code without animations used with 1st or 2nd code in app.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const WomenModule = () => {
    const navigate = useNavigate();

    return (
        <div className="text-center mt-10">
            <h2>Welcome to Women's Safety Hub</h2>
            <Link to="/women/self-defense" className="block p-4 bg-blue-500 text-white rounded mb-4">
                Self-Defense Tutorials
            </Link>
            <h1>The Legal Rights Matching Game is an interactive memory game where players match legal rights with real-life scenarios to enhance their knowledge. Players flip cards, find correct pairs, and progress through levels with engaging animations and fun challenges.To Play click the following link</h1>
            <p>⚡ Think Fast, Match Smart! 🎯
            Challenge your brain and sharpen your awareness—match legal rights to real-world scenarios before time runs out! ⏳🔥</p>
            <Link to="/women/legal-rights" className="block p-4 bg-blue-500 text-white rounded mb-4">
            Begin Quest! ⚖️
            </Link>
            <button onClick={() => navigate('/roles')} className="bg-gray-500 text-white px-4 py-2 mt-4">
                Back
            </button>
        </div>
    );
};

export default WomenModule;