//Import express
import express from 'express';
//Import the routes of the reservations
import reservationsRoutes from "./routes/reservations.routes.js";
//Import the routes of index
import indexRoutes from "./routes/index.routes.js";
//Store the initialization of express in a variable
const app = express();
//Specify the html template engine
app.set('view engine', 'ejs');
//Understanding the JSON file
app.use(express.json())
//Configure the port 3000
app.listen(3000)
console.log('Server run in port 3000')
//Use the reservations.routes.js
app.use(reservationsRoutes);
//Use the index.routes.js
app.use(indexRoutes);