import React from 'react';
import { useNavigate } from 'react-router-dom';
import selfDefenseVideos from '../../data/selfDefenseVideos';

const SelfDefenseTutorials = () => {
     const navigate = useNavigate();
    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4 text-center">Self-Defense Tutorials</h2>
            <button
    onClick={() => navigate('/women')}
    className="mt-6 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
>
    Back
</button>

            {selfDefenseVideos.map((video) => (
                <div key={video.id} className="mb-6">
                    <h3 className="text-lg font-semibold mb-2">{video.title}</h3>
                    <iframe
                        width="100%"
                        height="315"
                        src={video.videoUrl}
                        title={video.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="rounded shadow-lg"
                    ></iframe>
                </div>
            ))}
            
        </div>
    );
};

export default SelfDefenseTutorials;
/*
import React, { useState } from 'react';
import selfDefenseVideos from '../../data/selfDefenseVideos';
import { useNavigate } from 'react-router-dom';

const SelfDefenseTutorials = () => {
    const [currentVideo, setCurrentVideo] = useState(0);
    const navigate = useNavigate();

    const nextVideo = () => {
        if (currentVideo < selfDefenseVideos.length - 1) {
            setCurrentVideo(currentVideo + 1);
        }
    };

    const prevVideo = () => {
        if (currentVideo > 0) {
            setCurrentVideo(currentVideo - 1);
        }
    };

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">{selfDefenseVideos[currentVideo].title}</h2>
            <iframe
                width="560"
                height="315"
                src={selfDefenseVideos[currentVideo].videoUrl}
                title={selfDefenseVideos[currentVideo].title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="mb-4"
            ></iframe>
            <div className="flex justify-center gap-4">
                <button 
                    onClick={prevVideo} 
                    disabled={currentVideo === 0}
                    className={`px-4 py-2 bg-gray-500 text-white ${currentVideo === 0 && "opacity-50 cursor-not-allowed"}`}>
                    Previous
                </button>
                <button 
                    onClick={nextVideo} 
                    disabled={currentVideo === selfDefenseVideos.length - 1}
                    className={`px-4 py-2 bg-blue-500 text-white ${currentVideo === selfDefenseVideos.length - 1 && "opacity-50 cursor-not-allowed"}`}>
                    Next
                </button>
            </div>
            <button onClick={() => navigate('/women')} className="mt-4 bg-gray-500 text-white px-4 py-2">
                Back to Women's Module
            </button>
        </div>
    );
};

export default SelfDefenseTutorials;*/
