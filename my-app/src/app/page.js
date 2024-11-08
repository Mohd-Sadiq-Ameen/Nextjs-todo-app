// app/page.js
import Link from 'next/link';

export default function HomePage() {
    return (
        <div>
            <h1>Welcome to My Todo App</h1>
            <br />
            <p>
                <Link href="/users">View Todos</Link>
            </p>
        </div>
    );
}
