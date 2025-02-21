import { useCallback, useState } from "react"
import React from "react";

const Botao = React.memo(({onClick, children})=> {
    return <Button onClick={onClick}>{children}</Button>
});

const ContadorCallBack = () => {

    const [contador, setContador] = useState(0)

    const incrementar = useCallback(() => {
        setContador((contadorAnterior) => contadorAnterior + 1)
    }, [])
  return (
    <div>
        <p>Contagem: {contador} </p>
        <button onClick={incrementar}> Incrementar </button>
    </div>
  )
}

export default ContadorCallBack