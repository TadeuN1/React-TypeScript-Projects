import React from 'react'
import { useState, useEffect, useMemo } from 'react'

const Ex1 = ({ usuario }) => {

    useEffect(() => {
        document.title = `${usuario.name} - ${usuario.idade}`
    }, [usuario]);

    return(
    <div>
        <p> Usuario registrado: {usuario.name}</p>
        <p> Idade do usuário: {usuario.idade}</p>
    </div>
    )
}

const Ex2 = ( n ) => {
    if( n <= 1){
        return n
    }

    return Ex2(n - 1) + Ex2(n - 2)
}

const FibCalculator = ({ num }) => {
    const fibResult = useMemo(() => Ex2(num), [num]);

    return (
        <div>
            <p> Fibonnaci de {num} é {fibResult} </p>
        </div>
    );
}

const useOnlineStatus = () => {

    const [isOnline, setIsOnline] = useState(navigator.onLine)

    useEffect(() => {
        const handleOnline = () => setIsOnline(true);
        const handleOffline = () => setIsOnline(false);


        window.addEventListener("online", handleOnline)
        window.addEventListener("offline", handleOffline)

        return() => {
            window.removeEventListener("online", handleOnline)
            window.removeEventListener("offline", handleOffline)

        }


    }, [])

    return isOnline
}


const OnlineStatusIndicator = () => {
    const isOnline = useOnlineStatus();

    return(
        <div>
            <p> Você está atualmente: {isOnline? "Online" : "Offline"}</p>
        </div>
    )
}

const Exercicio = () => {
  const usuario = { name: "Tadeu", idade: "27 Anos"};

  return (
    <div>
    <Ex1 usuario={usuario} />

    <FibCalculator num={10}/>

    <OnlineStatusIndicator />

    </div>
  )
}

export default Exercicio