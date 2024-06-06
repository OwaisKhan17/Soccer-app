// Import the express module, which is a web framework for Node.js
import express from "express";

// Import the mongoose module, which is an ODM (Object Data Modeling) library for MongoDB and Node.js
import mongoose from "mongoose";

// Import the body-parser middleware to parse incoming request bodies
import bodyParser from "body-parser";

// Import the cors middleware to enable Cross-Origin Resource Sharing
import cors from "cors";

// Import routes from the soccerRoutes file
import routes from "./routes/soccerRoutes";

// Set mongoose to use global Promise
mongoose.Promise = global.Promise;

// Connect to the MongoDB database named soccerDB
// mongoose.connect('mongodb://localhost//soccerDB')
// Connect to the MongoDB Atlas database
const mongoDBAtlasUri = 'mongodb+srv://owaiswajidkhan:HSUDvpYVvKJ6sLJ4@mern-cluster.yzgph2u.mongodb.net/?retryWrites=true&w=majority&appName=Mern-Cluster';
mongoose.connect(mongoDBAtlasUri)
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch((error) => console.log('Error connecting to MongoDB Atlas:', error));


// Create an instance of an Express application
const app = express();

// Use body-parser middleware to parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Use body-parser middleware to parse JSON bodies
app.use(bodyParser.json());

// Use cors middleware to enable CORS
app.use(cors());

// Register the routes with the Express application
routes(app);

// Define the port number on which the server will listen
const PORT = 4000;

// Define a route handler for the root URL ('/')
// When a GET request is made to the root URL, send a response
// with a message indicating the port the application is running on
app.get('/', (req, res) =>
    res.send(`Our application is running on port ${PORT}`)
);

// Start the server and have it listen on the specified port
// When the server is successfully running, log a message to the console
app.listen(PORT, () =>
    console.log(`Your soccer server is running on port ${PORT}`)
);
