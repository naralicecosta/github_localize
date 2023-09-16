type SearchProps = {
    loadUser: (userName: string) => Promise<void>
}

import { useState, KeyboardEvent } from 'react'
import {BsSearch} from 'react-icons/bs'

const Search = ({loadUser}: SearchProps) => {
    const [userName, setUserName] = useState("");

    const handleKeyDown = (e: KeyboardEvent) => {
        if(e.key === "Enter"){
            //quando pressionar
            loadUser(userName)

        }
    }

    return (
        <>
        <div>
            <h2>Busque por um usuário:</h2>
            <p>Conheça os melhores repositorios</p>
        </div>
        <div>
            <input type="text" placeholder="Digite o nome do usuário"
            onChange={(e) => setUserName(e.target.value)}
            onKeyDown={handleKeyDown}//para quando clicar na tecla enter
             />
            <button onClick={() => loadUser(userName)}>
                <BsSearch />
            </button>
        </div>
        </>
    )
}
export default Search;