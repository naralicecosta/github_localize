import Search from "../components/Search";
import { UserProps } from "../types/user";
import { useState } from "react" //useState para a requisição do usuário
import User from '../components/User'
import Error from "../components/Error";

//teremos um componente de busca e outro de exibir os dados do usuário, iremos centralizar as ações em Home
//para a possibilidade de passar a função para um e os dados para outro
const Home = () => {
    const [user, setUser] = useState<UserProps | null> (null);
    const [error, setError] = useState(false); //localizar erro

    const loadUser = async(userName: string) => {//função para carregar os dados de usuário da api

        //zerando erros e usuário
        setError(false)
        setUser(null)
        //acessar a api do github
        const res =  await fetch(`https://api.github.com/users/${userName}`);
        const data = await res.json();

        //identificando erros
        if(res.status === 404){
            setError(true)
            return;
        }

        const {avatar_url, login, location, followers, following} = data;
        const userData: UserProps = {
            avatar_url,
            login,
            location,
            followers,
            following
        }
            setUser(userData)
        }
        return (
            <div>{/**estou dizendo que o loadUser deste arquivo é igual ao loadUser do search */}
                <Search loadUser={loadUser} />
                {user && <User {...user} />}
                {error && <Error />} 
                {/**se o erro existe, imprrima o comp de erro */}
            </div>
        )
    } 

export default Home;