import ToDoList from '../components/ToDoList'
import styles from '../styles/Home.module.css'

export default function Home({todos}) {
    return (
        <div className={styles.container}>
            <ToDoList todos={todos} />
        </div>
    )
}

export async function getServerSideProps() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos?_limit=6`)
    const todos = await res.json()

    return {
        props: {
            todos
        }
    }
}