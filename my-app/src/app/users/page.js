// app/users/page.js
// src/app/users/page.js

export default async function UsersPage() {
    try {
        // Fetch data from your backend API
        const response = await fetch('http://localhost:5000/api/todos', { cache: 'no-store' });
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const todos = await response.json();

        return (
            <div>
                <h1>Todos</h1>
                <ul>
                    {todos.map((todos) => (
                        <li key={todos.id}>
                            {todos.title} - {todos.completed ? 'Completed' : 'Not Completed'}
                        </li>
                    ))}
                </ul>
            </div>
        );
    } catch (error) {
        return <p>Error: {error.message}</p>;
    }
}
