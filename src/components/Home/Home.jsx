import { useContext } from "react"
import { AuthContext } from "../Provider/AouthProvider"

export default function Home() {
    const AouthIngfo=useContext(AuthContext)
  return (
    <div>
      <h2 className="text-center text-2xl">Hello from Home :{AouthIngfo}</h2>
    </div>
  )
}
