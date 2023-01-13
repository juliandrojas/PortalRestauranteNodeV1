import { Router } from "express";
import { pool } from "../db";
const router = Router()
//Query to the database using async await and pool.query method
app.get('/ping', async (require, response) => {
    const [result] = await pool.query('SELECT * FROM reservas')
    response.json(result[0])
})
export default router