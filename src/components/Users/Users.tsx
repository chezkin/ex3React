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

    </>
    
    
  )
}

export default Users