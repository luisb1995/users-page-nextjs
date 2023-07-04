import Navigation from "@/components/Navigation"
import FetchUsers from "../components/FetchUsers"

export default function Home() {
  return (
    <main className="main">
        <h1 className="titulo">Lista de Usuarios</h1>
        <div className="div">
           <FetchUsers/>
       </div>
    </main>
  )
}
