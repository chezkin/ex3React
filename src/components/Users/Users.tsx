import React, { useEffect, useRef, useState , FormEvent} from 'react'
import {v4 as uuidv4} from 'uuid'

type User = {
    id : string,
    name : string,
    email : string
}


type Props = {
    data : User[]
}

const Users = (props: Props) => {
    const newUserName = useRef(null)
    const newUserEmail = useRef(null)


    const addUserDiv = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const user = {...newUser.current , id : uuidv4()}
        return (
            <div className="user">
                <h3>{user.name}</h3>
                <h4>{user.email}</h4>
                <p>{user.id}</p>
            </div>
        )


    }
  return (
    <>
    { props.data.map((user : User) =>{
        return (
            <div key={user.id} className="user">
                <h3>{user.name}</h3>
                <h4>{user.email}</h4>
                <p>{user.id}</p>
            </div>
        )
    })}
    <form onSubmit={addUserDiv}>
        <input ref={newUserName} type="text" name="name" id="name" placeholder='Enter your name' />
        <input ref={(e) => {newUserEmail.current = e.targat.value} } type="email" name="email" id="email" placeholder='Enter your email'/>
        <button onClick={addUserDiv} type="submit">add user</button>
    </form>
    </>
    
    
  )
}

export default Users