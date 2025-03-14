import FormularioLogin from './components/FormularioLogin'
import HookLS from './components/HookLS'
import ListaDeCompras from './components/ListaDeCompras'

function App() {

  return (
    <div>
      <h1> Exercícios </h1>

      <div className='ex1'>
        <FormularioLogin />
      </div>

      <div className='ex2'>
        <ListaDeCompras />
      </div>
      
      <div className='ex2'>
        <HookLS />
      </div>

    </div>
  )
}

export default App
