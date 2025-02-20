import React, { useState } from 'react'

const Greetings = ({name}) => {
    return <h3> Olá {name}, seja bem vindo.</h3>
}

const Counter = () => {
    const [ count, setcount] = useState(0);

    return(
        <div>
            <p>Você clicou {count} vezes no botão!</p>
            <button onClick={ () => setcount(count + 1)}> Adicionar Contador</button>
            <button onClick={ () => setcount(count - 1)}> Diminuir Contador</button>
        </div>
    )
}

const TaskList = ({tasks}) => {
    if(tasks.length === 0){
        return <p> Não há tarefas para mostrar.</p>
    }

    return (
        <ul>
            {tasks.map((task)    => (
                <li key={task.id}> {task.text}</li>
            ))}
        </ul>
    )
}

const Exercises = () => {
        const tasks = [
            {id: 1, text: "Comprar Leite"},
            {id: 2, text: "Estudar React"}
        ]

  return (
    <div>
    <h2>Exercício 01</h2>
    <Greetings name={"Mel"}/>
    <h2> Exercício 02</h2>
    <Counter />
    <h2> Exercício 03</h2>
    <TaskList tasks={tasks}/>
    </div>
   

  )
}

export default Exercises