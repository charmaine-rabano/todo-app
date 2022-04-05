export default function Tasks({task}) {
    return (
        <div>
            <h2>Task Details</h2>
            <p>Task: {task.title}</p>
            <p>Completed: {task.completed ? 'Yes' : 'No'}</p>
        </div>

    )
}

export async function getStaticProps(context) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${context.params.id}`)
    const task = await res.json()

    return {
        props: {
            task
        }
    }
}

export async function getStaticPaths() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos`)
    const tasks = await res.json()

    const ids = tasks.map(task => task.id)
    const paths = ids.map(id => ({params: {id: id.toString()}}))

    return {
        paths, //paths: { params: { id: '1', id: '2' } }
        fallback: false
    };
  }