import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { AuthContext } from "../context/AuthContext";


function Login() {
    const [user, setUser] = useState(
        { username: 'workintech', password: 'wecandoit' });

    const history = useHistory();

    const { login } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        login(user);
        history.push("/friends")
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };


    return (
        <div
            style={{
                width:"25%",
                margin: "auto"
            }}>
            <h1>LOGİN</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    USERNAME
                    <br />
                    <input
                        type="text"
                        name="username"
                        value={user.username}
                        onChange={handleChange}
                        style={{
                            color: "white",
                            backgroundColor: "black",
                            width:"100%"
                        }}
                    />
                </label>
                <br />
                <label>
                    PASSWORD
                    <br />
                    <input
                        type="password"
                        name="password"
                        value={user.password}
                        onChange={handleChange}
                        style={{
                            color: "white",
                            backgroundColor: "black",
                            width:"100%"
                        }}
                    />
                </label>
                <br />
                <button
                    style={{
                        color: "white",
                        backgroundColor: "black",
                        width:"100%"
                    }}>
                    Login</button>
            </form>
        </div>
    );
};

export default Login;