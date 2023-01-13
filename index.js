//Import express
import express from 'express';
//Import db.js
import { pool } from "./db.js";
//Store the initialization of express in a variable
const app = express();
//Configure the port 3000
app.listen(3000)
console.log('Server run in port 3000')
//Endpoints (Routes of the server)
//Query to the database using async await and pool.query method
app.get('/ping', async (require, response) => {
    await pool.query('SELECT * FROM reservas', () => {

    })
})
//Principal route
app.get('/', (require, response) => {
    response.send("All Right");
})
//Add the data
app.post('/reserva', (require, response) => {
    response.send("Create Reservation")
})
//Edit the data
app.put('/edit', (require, response) => {
    response.send("Editing reservation")
})
//Delete the data
app.delete('/delete', (require, response) => {
    response.send("Deleting reservation")
})