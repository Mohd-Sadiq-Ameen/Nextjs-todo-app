const { Pool } = require('pg');

// PostgreSQL setup
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "myappdb",
    password: '0123',
    port: 5432,
});

module.exports = pool;
