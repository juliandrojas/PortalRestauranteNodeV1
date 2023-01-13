import { Router } from "express";
import { index } from "../controllers/index.controller.js";
const router = Router()
//Query to the database using async await and pool.query method
router.get('/db', index);
export default router