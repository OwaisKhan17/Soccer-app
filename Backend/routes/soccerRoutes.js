// Importing the necessary player controller functions from the playerControllers module
import {
    addNewPlayer,   // Function to add a new player
    getPlayers,     // Function to get all players
    getPlayerbyID,  // Function to get a player by ID
    updatePlayer,   // Function to update a player by ID
    deletePlayer    // Function to delete a player by ID
} from '../controllers/playerControllers'

// Defining the routes function which will set up the routes for the application
const routes = (app) => {
    // Setting up the route for '/players'
    app.route('/players')
        .get(getPlayers)    // Handles GET requests to fetch all players
        .post(addNewPlayer) // Handles POST requests to add a new player

    // Setting up the route for '/player/:PlayerID'
    app.route('/player/:PlayerID')
        .get(getPlayerbyID)    // Handles GET requests to fetch a player by ID
        .put(updatePlayer)     // Handles PUT requests to update a player by ID
        .delete(deletePlayer)  // Handles DELETE requests to remove a player by ID
}

// Exporting the routes function as the default export
export default routes
