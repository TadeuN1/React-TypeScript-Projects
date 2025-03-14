import { useEffect, useState } from "react"

const HookLS = () => {

    function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void] {
        const [storageValue, setStorageValue] = useState<T>(() => {
            try {
                const item = localStorage.getItem(key)
                return item ? JSON.parse(item) : initialValue
            } catch (error) {
                console.log(error)
            }

            
        })
        const setValue = (value: T) => {
            try {
                setStorageValue(value)
                localStorage.setItem(key, JSON.stringify(value))
            } catch (error) {
                console.log(error)
            }   
        }

        useEffect(() => {
            setValue(storageValue)
        }, [])

        return [storageValue, setValue]
    }

    const [nome, setNome] = useLocalStorage("nome", "")

  return (
    <div>
        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)}/>
        <p> O nome armazenado é: {nome}</p>
    </div>
  )
}

export default HookLS