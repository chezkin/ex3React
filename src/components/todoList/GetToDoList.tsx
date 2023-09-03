import { useEffect, useState } from "react"
import React from 'react'




type ToDoList = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
};

type Props = {
    id : number;
};

const GetToDoList = (props : Props) => {
    const [items, setItems] = useState<ToDoList[]>([]);

    useEffect(() => {
        const fetchItems = async () => {
            const res = await getDataToDo(props.id)
            setItems(res)
        }
        fetchItems()
    }, [])

    return (
        <ul id="users">
            {

            items!.map((item) => {if (! item.completed) {return (<li>{item.title}</li>) }})
            }
        </ul> 
    )
}

const getDataToDo = async (id : number) => {
    const result = await fetch(`https://jsonplaceholder.typicode.com/users/${id}/todos`)
    const data = await result.json()
    return data
}

export default GetToDoList