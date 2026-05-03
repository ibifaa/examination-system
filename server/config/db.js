import pg from "pg";
import dotenv from "dotenv";

// const pg = require("pg")
// const dotenv= require("dotenv")
dotenv.config();

const {Pool} = pg;

const pool = new Pool({
    user: process.env.DB_USER,       
  host: process.env.DB_HOST,       
  database: process.env.DB_NAME,  
  password: process.env.DB_PASSWORD, 
  port: process.env.DB_PORT, 
})

async function dbConnection() {
    try {
      const client = await pool.connect();
      console.log('Database connected successfully!');
      client.release();
    } catch (err) {
      console.error('Error connecting to the database:', err.message);
    }
  }
  
  // Call the function to  connects
  dbConnection();
  

  export default pool;