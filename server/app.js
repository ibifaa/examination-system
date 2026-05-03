const express = require('express')
const router = express.Router();
// import pool from ("./config/db.js")
const pool = require("./config/db");



module.exports = router
// const express = require('express')
const app = express();





app.listen(4000, ()=>{
    console.log('Server is running on port 4000')
})

