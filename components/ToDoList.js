import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid' //to install: npm i uuid
import ToDoItem from './ToDoItem'

export default function ToDoList({todos}) {
    console.log(todos)
    const [userInput, setUserInput] = useState('')
    const [items, setItems] = useState([
        {
            id: '1',
            task: 'task 1',
            done: false
        }, {
            id: '2',
            task: 'task 2',
            done: true
        }, {
            id: '3',
            task: 'task 3',
            done: true
        }
    ])

    function handleClick(e) {
        e.preventDefault()

        setItems([
            ...items,
            {
                id: uuidv4(), //generates random id
                task: userInput,
                done: false
            }
        ])
    }

    return (
        <div>
            <h2>My To Do List</h2>
            <form>
                <input type='text' onChange={(e) => setUserInput(e.target.value)} />
                <button onClick={handleClick}>Add Item</button>
            </form>
            <ul>
                {todos.map((item) => (
                    <ToDoItem item={item} key={item.id} />
                ))}
            </ul>
            
        </div>
    )
}