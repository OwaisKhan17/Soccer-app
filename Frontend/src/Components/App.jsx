import React, { useState, useEffect } from 'react'
import axios from "axios"
import './App.css'
import PlayerForm from "./Player/PlayerForm"
import PlayerSingle from "./Player/PlayerSingle"
import PlayerList from "./Player/PlayerList"

function App() {

  const [players, setPlayers] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState({});

  useEffect(() => {
    let url = "http://localhost:4000/players"
    axios.get(url)
      .then((Response) => {
        setPlayers(Response.data)
      })
      .catch((error) => console.log(error))
  }, [])

  const updateCurrentPlayer = (item) => {
    setCurrentPlayer(item)
  }

  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <nav>
            <div className='nav-wrapper blue darken-1'>
              <a href="/" className='brand-logo'>Soccer Management</a>
            </div>
          </nav>
        </div>
        <div className='row'>
          <div className='col s3'><PlayerList players={players} updateCurrentPlayer={updateCurrentPlayer} /></div>
          <div className='col s9'><PlayerSingle currentPlayer={currentPlayer} /></div>
        </div>
        <div className='row'>
          <div className='col s12'><PlayerForm /></div>
        </div>
      </div>
    </>
  )
}

export default App
