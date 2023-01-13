import { pool } from "../db.js";
export const index = async (require, response) => {
    const [result] = await pool.query('SELECT * FROM reservas')
    response.json(result)
}