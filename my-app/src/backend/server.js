// db details

// db -> myappdb
// table_name -> todos
// structure -> id(int) | title(string) | completed(boolean)


// backend/server.js
const express = require('express');
const cors = require('cors');
const pool = require('./database/db');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());


// Test database connection
pool.connect((err) => {
    if (err) {
        console.error('Database connection error:', err.stack);
    } else {
        console.log('Connected to PostgreSQL database');
    }
});

// Sample route
app.get('/api/todos', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM todos');
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/' , (req,res)=>{
    res.send("hello world")
})

app.listen(port, () => {
    console.log(`Backend server running on http://localhost:${port}`);
});


// SSR

// app/users/page.js
// export async function getServerSideProps() {
//     try {
//         const response = await fetch('http://localhost:5000/api/users');
//         if (!response.ok) {
//             throw new Error('Failed to fetch data');
//         }
//         const data = await response.json();
//         return { props: { users: data } };
//     } catch (error) {
//         return { props: { error: error.message } };
//     }
// }

// export default function UsersPage({ users, error }) {
//     if (error) return <p>Error: {error}</p>;

//     return (
//         <div>
//             <h1>Todos</h1>
//             <ul>
//                 {users.map(user => (
//                     <li key={user.id}>
//                         {user.title} - {user.completed ? 'Completed' : 'Not Completed'}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }
