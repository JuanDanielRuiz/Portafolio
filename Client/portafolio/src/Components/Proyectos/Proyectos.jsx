import './StyleProyectos.css'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useMediaQuery } from 'react-responsive';





const Proyectos = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Función para realizar la petición
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/allData');
                setData(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);
   
   
   
   

    console.log(data)
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
    return (
       
        <div class="container-fluid proyectos">
            {isMobile && (
                <p style={{ color: 'red', fontSize: '30px', background: '#374259', margin: 0, padding: '10px' }}>Esta pagina solo esta disponible en version web. La version movil esta en creacion.</p>
            )}
          
               
           
           
            {data.map((item) => (
                <div class="card" >
                    <img src={item.img} class="card-img-top" alt="Project" />
                <div class="card-body">
                <h5 class="card-title">{item.name}</h5>
                        <p class="card-text">{item.description}</p>
                        <a href={item.linkedin} class="btn btn-primary">Linkedin</a>
                        <a href={item.repo} class="btn btn-primary">Git Hub</a>
                    </div>
                    
                </div>
                
                
                
                

            ))}
            {data.length === 0 ? <h3 style={{
                color: 'white',
                padding: '20px',
                margin:'auto',
                textAlign: 'center',
                fontWeight: 'bold',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
            }}>Lo siento por el Momento no Existen proyectos.</h3> : null}
           
        </div>

    )
}


export default Proyectos
