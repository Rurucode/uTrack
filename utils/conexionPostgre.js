const { Pool } = require('pg');
require('dotenv').config()

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'uTrack',
    password: process.env.POSTGRE_PASSWORD
})

module.exports = pool