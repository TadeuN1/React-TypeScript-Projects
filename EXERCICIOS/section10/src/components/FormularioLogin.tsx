import { useState } from "react";

const FormularioLogin = () => {

    const [usuario, setUsuario] = useState<string>("")
    const [senha, setSenha] = useState<string>("")


    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        alert(`Usuário ${usuario} e Senha ${senha} Logado com sucesso`)
    }
    const handleChangeU = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsuario(event.target.value)
    }
    const handleChangeS = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSenha(event.target.value)
    }

  return <form onSubmit={handleSubmit}>
    <input type="text" placeholder="Usuário" value={usuario} onChange={handleChangeU}/>
    <input type="text" placeholder="Senha" value={senha} onChange={handleChangeS} />
    <button type="submit"> Entrar </button>
    
  </form>
}

export default FormularioLogin