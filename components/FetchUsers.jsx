import React from 'react'
import ListUsers from './ListUsers'

const data = async () => {
       const res = await fetch("https://reqres.in/api/users")
       const datos =await res.json()
       return datos.data
}
async function FetchUsers() {
    const dat = await data();
  return (
    <div>
        <ListUsers users={dat} />
    </div>
  )
}

export default FetchUsers