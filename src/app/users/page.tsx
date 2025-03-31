'use client'

import React, { useState, useEffect } from 'react';
// import "./Demo.css";



const Users = () => {



  interface User {
    id: number;
    name: string;
    email: string;
    address: {
        city: string;
    };
    phone: number
  }

  const BASE_URL = "https://jsonplaceholder.typicode.com";

  const [users, setUsers] = React.useState([]);

  useEffect(() => {
    const fetchData = async() => {
      const response = await fetch(`${BASE_URL}/users`)
      const usersData = await response.json();
      

      console.log(usersData)
      setUsers(usersData);

    }

    fetchData()
  }, [])

  console.log(users)

  return (
    <div className='mx-4'>
      <h1 className='text-[1em] font-bold text-center py-4 sm:text-[2em]'>Users list</h1>

      <div className='data_div grid grid-cols-1 md:grid-cols-4 grid-row-3 gap-6 bg-blue-600'>
        {
          users.map((item: User, id) => {
            return(
              <div className='Item_div bg-[#e1edbd] rounded-lg p-3' key={item.id}>
                Name: {item.name}
                Email: {item.email}
                city: {item.address.city}
                Phone: {item.phone}
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Users