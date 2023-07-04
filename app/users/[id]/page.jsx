import Image from "next/image";

async function getUser(id) {

  const res = await  fetch(`https://reqres.in/api/users/${id}`)
  const dat = await res.json();
  return dat.data;
}



async function PostDetails({params}) {
    const {id} = params
    const data = await getUser(id)
    console.log(data)
  return (
    <div className="details">
          <h4>Detalles de Usuario</h4>
          <div>
          <Image 
              src={data.avatar}
              width={150}
              height={150}
              alt="data.email"
              className="avatarr"
          />
          <h5>{data.first_name} {data.last_name}</h5>
          <p>{data.email}</p>
          </div>
    </div>
  )
}

export default PostDetails