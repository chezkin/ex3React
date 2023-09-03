import { useEffect, useState } from "react"
import React from 'react'

import UserCard from "../UserCard/UserCard";
import './style.css'



type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
};

const UsersFromServer = () => {
    const [items, setItems] = useState<User[]>([]);

    useEffect(() => {
        const fetchItems = async () => {
            const res = await getDataUsers()
            setItems(res)
        }
        fetchItems()
    }, [])

    return (
        <div id="users">
            {items!.map((item) => { return (<UserCard data={item}></UserCard>) })}
        </div>
    )
}

const getDataUsers = async () => {
    const result = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await result.json()
    return data
}

export default UsersFromServer