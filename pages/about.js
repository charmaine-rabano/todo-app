import Link from "next/link"

export default function About({todos}) {
    console.log(todos)
    return (
        <div>
            <h2>About page</h2>

            {todos.map(todo => <h3 key={todo.id}>{todo.title}</h3>)}
            
            <Link href='/'>
                <a>Back to home</a>
            </Link>
        </div>
    )
}

export async function getStaticProps() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos?_limit=6`)
    const todos = await res.json()

    return {
        props: {
            todos
        }
    }
}