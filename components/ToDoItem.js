import Link from "next/link"

export default function ToDoItem({item}) {
    return (
        <li>
            <Link href={'/tasks/' + item.id}>
                <p>{item.title}{ item.completed ? ' - done' : ''}</p>
            </Link>
        </li>
    )
}