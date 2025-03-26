
import React, { useState, useEffect } from "react";
import legalRightsPairs from "./legalRightsData";
import { useNavigate } from "react-router-dom";
import "./LegalRightsGame.css";
import timerIcon from "./timer.png"; // Timer image

const LegalRightsGame = () => {
    const navigate = useNavigate();
    const [shuffledPairs, setShuffledPairs] = useState([]);
    const [selectedCards, setSelectedCards] = useState([]);
    const [matchedPairs, setMatchedPairs] = useState([]);
    const [score, setScore] = useState(0);
    const [message, setMessage] = useState("");
    const [showPopup, setShowPopup] = useState(false);
    const [timer, setTimer] = useState(30);
    const [timeUp, setTimeUp] = useState(false);
    const [gameCompleted, setGameCompleted] = useState(false); // New state to track if the game is completed

    useEffect(() => {
        const shuffled = [...legalRightsPairs].sort(() => Math.random() - 0.5);
        setShuffledPairs(shuffled);
    }, []);

    useEffect(() => {
        if (gameCompleted) return; // Stop timer if game is completed

        const countdown = setInterval(() => {
            setTimer((prevTime) => {
                if (prevTime <= 1) {
                    clearInterval(countdown);
                    if (!gameCompleted) { // Only show "Time's Up" if the game is not completed
                        setShowPopup(true);
                        setTimeUp(true);
                    }
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);

        return () => clearInterval(countdown);
    }, [gameCompleted]);

    const handleCardClick = (id) => {
        if (selectedCards.length < 2 && !selectedCards.includes(id) && !matchedPairs.includes(id)) {
            setSelectedCards([...selectedCards, id]);
        }
    };

    useEffect(() => {
        if (selectedCards.length === 2) {
            const [firstId, secondId] = selectedCards;
            const firstCard = shuffledPairs.find(card => card.id === firstId);
            const secondCard = shuffledPairs.find(card => card.id === secondId);

            if (firstCard.type === secondCard.type) {
                setMessage("⚠️ Choose one Right & one Scenario!");
                setTimeout(() => {
                    setSelectedCards([]);
                    setMessage("");
                }, 1500);
                return;
            }

            if (firstCard.pairId === secondCard.pairId) {
                setTimeout(() => {
                    setMatchedPairs([...matchedPairs, firstId, secondId]);
                    setScore(prevScore => prevScore + 1);
                    setMessage("✅ Correct Match! Well Done!");
                    setSelectedCards([]);
                }, 1000);
            } else {
                setMessage("❌ Wrong! Try Again.");
                setTimeout(() => {
                    setSelectedCards([]);
                    setMessage("");
                }, 2000);
            }
        }
    }, [selectedCards, shuffledPairs, matchedPairs]);

    useEffect(() => {
        if (matchedPairs.length === legalRightsPairs.length) {
            setGameCompleted(true); // Mark game as completed
            setTimeout(() => {
                setShowPopup(true);
            }, 1000);
        }
    }, [matchedPairs]);

    return (
        <div className="game-container">
            {/* Timer Display in Top Right */}
            <div className="timer-container">
                <img src={timerIcon} alt="Timer" className="timer-icon" />
                <span className={`timer-text ${timer <= 10 ? "warning" : ""}`}>{timer}s</span>
            </div>

            <h2 className="game-title">💡 Guess All The Pairs!</h2>
            <p className="score">Pair up legal rights with real-life situations—every correct match brings you closer to victory! 🏆🔥</p>

            <div className="card-grid">
                {shuffledPairs.map((card) => (
                    <div
                        key={card.id}
                        className={`card ${selectedCards.includes(card.id) || matchedPairs.includes(card.id) ? "flipped" : ""} ${card.type}`}
                        onClick={() => handleCardClick(card.id)}
                    >
                        <div className="card-inner">
                            <div className="card-front">❓</div>
                            <div className="card-back">{card.text}</div>
                        </div>
                    </div>
                ))}
            </div>

            {message && <p className="message">{message}</p>}

            <button className="back-button" onClick={() => navigate("/women")}>🔙 Back</button>

            {/* Pop-up appears when game is completed OR time is up */}
            {showPopup && (
                <div className="popup">
                    <div className="popup-content">
                        {timeUp && !gameCompleted ? ( // Only show "Time's Up" if the game is not completed
                            <>
                                <h2>⏳ Time's Up! Try Again 🔄</h2>
                                <p>Don't give up! Match all the pairs before time runs out next time! 🚀</p>
                                <button className="popup-btn" onClick={() => navigate("/women")}>🔙 Back</button>
                                <button className="popup-btn try-again" onClick={() => window.location.reload()}>🔄 Try Again</button>
                            </>
                        ) : (
                            <>
                                <h2>🎉 Congratulations! 🎉</h2>
                                <p>You've successfully completed Level 1!</p>
                                <button className="popup-btn" onClick={() => navigate("/women")}>🔙 Back</button>
                                <button className="popup-btn next-level" onClick={() => navigate("/next-level")}>➡️ Next Level</button>
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default LegalRightsGame;
