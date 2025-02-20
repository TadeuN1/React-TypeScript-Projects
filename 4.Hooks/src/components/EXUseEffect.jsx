import { useState } from "react"
import { useEffect } from "react"

const EXUseEffect = () => {
    const [contador, setContador] = useState(0)

    useEffect(() => {
        document.title = `Você clicou ${contador} vezes`
    })


  return (
    <div>
    <p>
       Você clicou { contador } vezes.</p>
       <button onClick={() => setContador(contador+1)}> Clique </button>
       </div>
  )
}

export default EXUseEffect