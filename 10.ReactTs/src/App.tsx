import './App.css'
import ContadorIntervalo from './components/ContadorIntervalo'
import Counter from './components/Counter'
import Greetings from './components/Greetings'
import TextInput from './components/TextInput'

function App() {

  return (
    <>
     <h1> React com TS </h1>
     <Greetings name='Tadeu' />
     <Counter />
     <TextInput />
     <ContadorIntervalo />
    </>
  )
}

export default App
