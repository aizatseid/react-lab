import './SecondPage.scss';
import { useEffect, useState } from "react";
import axios from "axios";

export const SecondPage = () => {

   const [users, setUsers] = useState([]);

     const getUsers = async () => {
       const resp = await axios("https://jsonplaceholder.typicode.com/users");
       console.log(resp.data);
       setUsers(resp.data);
     };

        useEffect(() => {
          getUsers();
        }, []);

  return (
    <div className="container">
      <div className="grid">
        {users.map((el) => (
          <div className="card" key={el.id}>
            <h4 className="name">{el.name}</h4>
            <p className='username'>{el.username}</p>   
            <p className='email'>{el.email}</p>   
            <p className='website'>{el.website}</p>   
          </div>
        ))}
      </div>
    </div>
  );
}