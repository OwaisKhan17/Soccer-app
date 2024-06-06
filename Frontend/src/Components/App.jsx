// Import necessary libraries and components
import { useState, useEffect } from 'react';
import axios from "axios";
import './App.css';
import PlayerForm from "./Player/PlayerForm";
import PlayerSingle from "./Player/PlayerSingle";
import PlayerList from "./Player/PlayerList";

// Define the main App component
function App() {
  // State hooks for managing players list and the currently selected player
  const [players, setPlayers] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState({});

  // useEffect hook to fetch players data from the server when the component mounts
  useEffect(() => {
    const url = "http://localhost:4000/players";
    axios.get(url)
      .then((response) => {
        setPlayers(response.data); // Update the players state with fetched data
      })
      .catch((error) => console.log(error)); // Log any errors to the console
  }, []); // Empty dependency array ensures this effect runs only once

  // Function to update the currentPlayer state with the selected player
  const updateCurrentPlayer = (item) => {
    setCurrentPlayer(item);
  };

  // Return the JSX layout of the application
  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <nav>
            <div className='nav-wrapper blue darken-1'>
              <a href="/" className='brand-logo'>Soccer Management</a> {/* Navbar with a brand logo */}
            </div>
          </nav>
        </div>
        <div className='row'>
          <div className='col s3'>
            {/* PlayerList component displays the list of players and allows selection of a player */}
            <PlayerList players={players} updateCurrentPlayer={updateCurrentPlayer} />
          </div>
          <div className='col s9'>
            {/* PlayerSingle component displays details of the selected player */}
            <PlayerSingle currentPlayer={currentPlayer} />
          </div>
        </div>
        <div className='row'>
          <div className='col s12'>
            {/* PlayerForm component for adding or editing player details */}
            <PlayerForm />
          </div>
        </div>
      </div>
    </>
  );
}

// Export the App component as the default export of this module
export default App;
