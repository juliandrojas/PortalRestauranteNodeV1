import { createPool } from "mysql2";
//Params of connection with createPool and export the const pool
export const pool = createPool({
    host: '',
    user: 'root',
    password: '',
    port: 3306,
    database: 'portalRestaurante'
})