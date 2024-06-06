import PropTypes from 'prop-types';

// Define the PlayerList component which receives two props: 
// 'players' (an array of player objects) and 'updateCurrentPlayer' (a function to update the current player)
const PlayerList = ({ players, updateCurrentPlayer }) => {
    return (
        <div>
            {/* Define an unordered list with specific CSS classes */}
            <ul className="collection with-header">
                {/* List header with a title */}
                <li className="collection-header"><h4>Players</h4></li>

                {/* Map through the players array to create a list item for each player */}
                {players.map((item) => (
                    // Each list item is a clickable link which triggers 'updateCurrentPlayer' with the selected player
                    <a
                        href="#!" // Prevents the default link behavior
                        className="collection-item" // CSS class for styling
                        key={item._id} // Unique key for each list item
                        onClick={() => updateCurrentPlayer(item)} // Click event handler to update the current player
                    >
                        {/* Display the player's first and last name */}
                        {item.firstName} {item.lastName}
                    </a>
                ))}
            </ul>
        </div>
    );
}

PlayerList.propTypes = {
    players: PropTypes.arrayOf(PropTypes.shape({
        _id: PropTypes.string.isRequired,
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired
    })).isRequired,
    updateCurrentPlayer: PropTypes.func.isRequired
};

// Export the PlayerList component as the default export of this module
export default PlayerList;
