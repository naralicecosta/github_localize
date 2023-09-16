import Search from "../components/Search";
import { UserProps } from "../types/user";
import { useState } from "react" //useState para a requisição do usuário

//teremos um componente de busca e outro de exibir os dados do usuário, iremos centralizar as ações em Home
//para a possibilidade de passar a função para um e os dados para outro
const Home = () => {
    const [user, setUser] = useState<UserProps | null> (null)

    const loadUser = async(userName: string) => {//função para carregar os dados de usuário da api
        //acessar a api do github
        const res =  await fetch(`https://api.github.com/users/${userName}`);
        const data = await res.json();
        console.log(data)


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
                {user && <p>{user.login}</p>}
            </div>
        )
    } 

export default Home;