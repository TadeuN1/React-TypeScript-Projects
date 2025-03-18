import './App.css'
import BarraFerramentas from './components/BarraFerramentas'
import Contador from './components/Contador'
import ContadorIntervalo from './components/ContadorIntervalo'
import Counter from './components/Counter'
import ExibirPostagens from './components/ExibirPostagens'
import Greetings from './components/Greetings'
import TextInput from './components/TextInput'
import { TemaProvider } from './contexts/TemaContext'

function App() {

  return (
    <>
     <h1> React com TS </h1>
     <Greetings name='Tadeu' />
     <Counter />
     <TextInput />
     <ContadorIntervalo />

     <Contador />
     <TemaProvider>
      <BarraFerramentas />
     </TemaProvider>
     <ExibirPostagens />
    </>
  )
}

export default App
