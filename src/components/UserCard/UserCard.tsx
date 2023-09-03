import React ,{useState} from 'react'

import GetToDoList from '../todoList/GetToDoList';

import './cardStyle.css'


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

type Props = {
    data: User
}

const UserCard = (props: Props) => {
    const [todoList, settodoList] = useState(null)
  return (
    <div onClick={() => { !todoList ? settodoList(<GetToDoList id={props.data.id}/>) : settodoList(null)}}  className='crardUser' key={props.data.id}>
        <h2>{props.data.name}</h2>
        <h4>{props.data.email}</h4>
        {todoList}

    </div>
  )
}

export default UserCard