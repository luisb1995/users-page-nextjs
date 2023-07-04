"use client"
import React from 'react'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
function ListUsers({users}) {
    const router = useRouter();
  return (
    <div className='user'>
        <ul className='list-group'>
            {users.map((user)=>(
                <li key={user.id} className='list-group-item  list-group-item-action' onClick={()=>{
                    router.push(`/users/${user.id}`)
                }}>
                    <div className='cardd'>
                        <h4 className='nombre'>{user.id}. {user.first_name} {user.first_name}</h4>
                        <Image 
                            src={user.avatar} 
                            width={100}
                            height={100}
                            alt={user.email}
                            className='image'
                        />
                    </div>
                </li>
            ))}
            
        </ul>
    </div>
  )
}

export default ListUsers