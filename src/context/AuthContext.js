import axios from "axios";
import { createContext } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import useLocalStorage from "../hooks/useLocalStorage";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {

    const [authInfo, setAuthInfo] = useLocalStorage("S11G2", {});

    const history = useHistory();

    let isLoggedIn = authInfo && authInfo.token;

    const logout = () => {
        setAuthInfo({});
        history.push("/login");
    };

    const login = (credentials) => {
        axios
        .post("http://localhost:9000/api/login", credentials)
        .then(res=> res.data && setAuthInfo(res.data)
        )
        .catch(err=> console.log( err )
        );
    };

    return (
        <AuthContext.Provider value={{ authInfo, login, logout, isLoggedIn}}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContextProvider;