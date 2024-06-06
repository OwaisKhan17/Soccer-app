// Import necessary React component and hooks
import React from 'react';

// Define the PlayerSingle component which receives 'currentPlayer' prop
const PlayerSingle = ({ currentPlayer }) => {
    return (
        <div className="row">
            <div className="col s12">
                {/* Card container to display player details */}
                <div className="card">
                    {/* Card image section */}
                    <div className="card-image">
                        {/* Display a soccer image */}
                        <img src="soccer.jpeg" alt="Soccer Image" />
                        {/* Display player's name as the card title */}
                        <span className="card-title">{currentPlayer.firstName} {currentPlayer.lastName}</span>
                    </div>
                    {/* Card content section */}
                    <div className="card-content">
                        {/* Display player's contact information */}
                        <p>Phone: {currentPlayer.phone} - Email: {currentPlayer.email}</p>
                        {/* Display player's physical attributes */}
                        <p>Strength: {currentPlayer.strength} - Endurance: {currentPlayer.endurance}</p>
                        {/* Display player's skills */}
                        <p>Ability: {currentPlayer.ability} - Techniques: {currentPlayer.techniques}</p>
                    </div>
                    {/* Card action section */}
                    <div className="card-action">
                        {/* Display player's team */}
                        Team: {currentPlayer.team}
                    </div>
                </div>
            </div>
        </div>
    );
}

// Export the PlayerSingle component as the default export of this module
export default PlayerSingle;
