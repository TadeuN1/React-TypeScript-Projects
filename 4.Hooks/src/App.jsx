import './App.css'
import EXUseEffect from './components/EXUseEffect'
import Timer from './components/Timer'
import ComponenteFilho from './components/ComponenteFilho'
import { MeuContextoProvider } from './contexts/MeuContexto'
import ValorDoContexto from './components/ValorDoContexto'
import Contador from './components/Contador'
import DisplayWindowSize from './components/DisplayWindowSize'
import Container from './components/Container'
import PerfilDeUsuario from './components/PerfilDeUsuario'
import CalculoPesado from './components/CalculoPesado'
import ContadorCallBack from './components/ContadorCallBack'

function App() {
  return (
    <>

      <EXUseEffect />
      <Timer />


      <MeuContextoProvider>
        <ComponenteFilho />
        <ValorDoContexto />
      </MeuContextoProvider>

      <Contador />
      <DisplayWindowSize />
      <Container> 
        <h1> Esse é meu título</h1>
        <p> Subtítulo. </p>
      </Container>

      <PerfilDeUsuario usuarioId={1}/>
      <CalculoPesado numero = {5}/>
      <ContadorCallBack />
    </>
  )
}

export default App
