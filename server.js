import { Mongoose } from "mongoose";

//If deployed use the deployed deatabase. Otherwise use the local NewsScraper database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb: //localhost/NewScraper";

// Connect to the Mongo DB
Mongoose.connect(MONGODB_URI);