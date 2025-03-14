import {useEffect, useState } from "react"

const Counter = () => {
    const[count, setCount] = useState<number>(0)

    useEffect(() => {
        console.log(`O contador está com valor de ${count}`)
    }, [count])

    return (
    <div>
        <p>{count}</p>
        <button onClick={() => setCount((prevCount) => count + 1)}> Incrementar </button>
    </div>
  )
}

export default Counter