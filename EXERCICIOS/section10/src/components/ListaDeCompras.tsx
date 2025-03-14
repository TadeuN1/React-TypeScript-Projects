import { useState } from "react";

const ListaDeCompras = () => {
    const [itens, setItens] = useState<Item[]>([]);
    const [novoItem, setNovoItem] = useState<string>("")

    type Item = {
        id: number;
        nome: string;
    }

    const adicionarItem = () => {
        const item: Item = {
            id: itens.length + 1,
            nome: novoItem
        }

        setItens([...itens, item])

        setNovoItem("")
    }

    return (
    <div>
        <h1> Lista De Compras </h1>
        <div>
        <input type="text" value={novoItem} onChange={(e) => setNovoItem(e.target.value)} />
        <button onClick={adicionarItem}> Adicionar </button>
        </div>
        <ul>
            {itens.map((item) => 
            (
                <li key={item.id}> {item.nome} </li>
            ))}
        </ul>
    </div>
  )
}

export default ListaDeCompras