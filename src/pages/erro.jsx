import { searchLocal } from '../components/localStorage.jsx';
import { useContext} from 'react';
import { AppContext } from "../components/context.jsx";
export const ErrorRoute = () => {
    const { text0, text1} = useContext(AppContext);

    return(
        <div className="d-flex w-100 h-100 align-items-center justify-content-center">
            <h1 style={searchLocal() === "true" ? text0 : text1}>Página não encontrada (erro: 404 not found)</h1>
        </div>
    )
}