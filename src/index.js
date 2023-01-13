//Import express
import express from 'express';
//Import the routes
import reservationsRoutes from "./routes/reservations.routes.js";
//Store the initialization of express in a variable
const app = express();
//Configure the port 3000
app.listen(3000)
console.log('Server run in port 3000')
//Use the reservations.routes.js
app.use(reservationsRoutes);