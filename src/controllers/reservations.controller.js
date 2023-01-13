import { pool } from "../db.js";
export const indexPage = (request, response) => {
    response.render('index');
}
export const insertReservation = async (request, response) => {
    console.log(request.body)
    //Destructuring the array of data
    const { nombreCliente, apellidoCliente, correoCliente, telefono, acompañantes, fechaReserva, horaReserva, observaciones } = request.body;
    //Build the query and pass it the values of the destructured array
    const [ rows ] = await pool.query('INSERT INTO reservas (nombreCliente, apellidoCliente, correoCliente, telefono, acompañantes, fechaReserva, horaReserva, observaciones) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', [ nombreCliente, apellidoCliente, correoCliente, telefono, acompañantes, fechaReserva, horaReserva, observaciones ])
    response.send({ rows })
}
export const editReservation = (request, response) => {
    response.send("Editing reservation")
}
export const deleteReservation = (request, response) => {
    response.send("Deleting reservation")
}