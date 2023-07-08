import React, { useState } from 'react';
import './StyleLoginAdmin.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


const LoginForm = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loggedIn, setLoggedIn] = useState(false); 

    const handleSubmit = async (e) => {
        e.preventDefault();
        const login = {

            username: email,
            passwordlogin: password
        }
        
        
        try {
            const response = await axios.post('http://localhost:8000/formLogin', login);
            

            // Si la respuesta es exitosa, establecer el estado loggedIn en true para redirigir
            if (response.status === 200) {
                setLoggedIn(true);
                navigate('/admin/proyect')
            } else if (response.status === 404) {
                setError(response.data.Session.result.error);
            } else if (response.status === 500) {
                setError(response.data.Session.result.error);
            }
        } catch (e) {
            setError(e.response.data.result.error);
        }

       
    

     
        

    };

    return (
        <div className="container-fluid  login">
            <div className="card">
                <div className="card-body">
                    <h2 className="card-title text-center">Iniciar sesion</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email:</label>
                            <input
                                type="email"
                                id="email"
                                className="form-control"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Contrasena:</label>
                            <input
                                type="password"
                                id="password"
                                className="form-control"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-primary">Iniciar sesion</button>
                            <br></br>
                            {error ? <p>{error}</p> : null}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
