import { Router } from "express";
//Import the reservations.controller.js
import { indexPage, insertReservation, editReservation, deleteReservation } from "../controllers/reservations.controller.js";
//Create a router
const router = Router();
//Endpoints (Routes of the server)
//Principal route
router.get('/', indexPage)
//Add the data
router.post('/reserva', insertReservation)
//Edit the data
router.put('/edit', editReservation)
//Delete the data
router.delete('/delete', deleteReservation)
export default router;