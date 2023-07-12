import React, { useState } from 'react';
import './StyleLoginAdmin.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { addUser } from '../../redux/userSlice'
import { useMediaQuery } from 'react-responsive';




const LoginForm = () => {
    const user = useSelector((state) => state.user)
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loggedIn, setLoggedIn] = useState(false); 
    const [showMessage, setShowMessage] = useState(true);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const login = {

            username: email,
            passwordlogin: password
        }
        
        
        try {
            const response = await axios.post('http://localhost:8000/formLogin', login);

            console.log(response.data.result)
            // Si la respuesta es exitosa, establecer el estado loggedIn en true para redirigir
            if (response.status === 200) {
                setLoggedIn(true);
                const combinedData = { ...response.data.result.data, ...response.data.result };
                dispatch(addUser(combinedData))
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

    window.localStorage.setItem(
        'login', JSON.stringify(user)
    )
    const timer = setTimeout(() => {
        setShowMessage(false);
    }, 8000);
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
    return (
        
        <div className="container-fluid  login">
            {isMobile && (
                <p style={{ color: 'red', fontSize: '30px', background: '#374259', margin: 0, padding: '10px' }}>Esta pagina solo esta disponible en version web. La version movil esta en creacion.</p>
            )}
            <div className="card">
                <div className="card-body">
                    {
                        showMessage && (!user || user.name === null) ? <p style={{ color: 'red' }}>Lo siento primero tienes que inisiar session</p> : null
                    }
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
