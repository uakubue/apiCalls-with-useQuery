'use client'

import { useQuery } from '@tanstack/react-query';
import React, { useState, useEffect } from 'react';
// import "./Demo.css";


interface User {
  id: number;
  name: string;
  email: string;
  address: {
      city: string;
  };
  phone: number
}

async function fetchUsers(){

  const BASE_URL = "https://jsonplaceholder.typicode.com";

  const response = await fetch(`${BASE_URL}/users`)

  return response.json()
}


const Users = () => {

  const { data, error, isLoading } = useQuery({
    queryKey: ["users"], 
    queryFn: fetchUsers
  })


  console.log(data)

  if(isLoading){
    return <div>Loading...</div>
  }else if (error){
    console.error("Ooops something went wrong")
  }

  return (
    <div className='mx-4'>
      <h1 className='text-[1em] font-bold text-center py-4 sm:text-[2em]'>Users list</h1>

      <div className='data_div grid grid-cols-1 md:grid-cols-4 grid-row-3 gap-6 bg-blue-600'>
        {
          data.map((item: User, id: number) => {
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