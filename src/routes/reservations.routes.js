import { Router } from "express";
//Create a router
const router = Router();
//Endpoints (Routes of the server)
//Principal route
router.get('/', (require, response) => {
    response.send("Hola Mundo");
})
//Add the data
router.post('/reserva', (require, response) => {
    response.send("Create Reservation")
})
//Edit the data
router.put('/edit', (require, response) => {
    response.send("Editing reservation")
})
//Delete the data
router.delete('/delete', (require, response) => {
    response.send("Deleting reservation")
})
export default router;