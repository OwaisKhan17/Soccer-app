// Importing mongoose for MongoDB interactions
import mongoose from "mongoose";

// Importing the PlayerSchema from the playerModel
import { PlayerSchema } from "../models/playerModel";

// Creating a Player model using the PlayerSchema
const Player = mongoose.model("Player", PlayerSchema)

// Function to add a new player
export const addNewPlayer = async (req, res) => {
    // Creating a new instance of Player with the data from the request body
    let newPlayer = new Player(req.body)

    try {
        // Saving the new player to the database
        const player = await newPlayer.save()
        // Sending the saved player as the response
        res.json(player)
    } catch (err) {
        // Sending the error as the response if any occurs
        res.send(err)
    }
}

// Function to get all players
export const getPlayers = async (req, res) => {
    try {
        // Finding all players in the database
        const players = await Player.find({})
        // Sending the found players as the response
        res.json(players)
    }
    catch (err) {
        // Sending the error as the response if any occurs
        res.send(err)
    }
}

// Function to get a player by ID
export const getPlayerbyID = async (req, res) => {
    try {
        // Finding a player by ID from the request parameters
        const player = await Player.findById(req.params.PlayerID)
        // Sending the found player as the response
        res.json(player)
    }
    catch (err) {
        // Sending the error as the response if any occurs
        res.send(err)
    }
}

// Function to update a player by ID
export const updatePlayer = async (req, res) => {
    try {
        // Finding a player by ID and updating it with the data from the request body
        const player = await Player.findOneAndUpdate(
            { _id: req.params.PlayerID },
            req.body,
            { new: true }  // Returning the updated document
        )
        // Sending the updated player as the response
        res.json(player)
    }
    catch (err) {
        // Sending the error as the response if any occurs
        res.send(err)
    }
}

// Function to delete a player by ID
export const deletePlayer = async (req, res) => {
    try {
        // Deleting a player by ID from the request parameters
        await Player.deleteOne({ _id: req.params.PlayerID })
        // Sending a success message as the response
        res.json({ message: "Successfully Deleted Player" })
    }
    catch (err) {
        // Sending the error as the response if any occurs
        res.send(err)
    }
}
