import bgImage from '../assets/bg-2.jpg'
import ResultadoChurrasco from '../components/ResultadoChurrasco'

const Resultado = () => {
  return <div style={{ backgroundImage: `url(${bgImage})` }} className='page-container'>
    <h1> Resultado do churrasco</h1>
    <ResultadoChurrasco />

  </div>
  
}

export default Resultado