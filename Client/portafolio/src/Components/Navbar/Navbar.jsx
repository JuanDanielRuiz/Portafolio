import './StyleNavbar.css'


const Navbar = () => {
    return (
        <div class="container-navbar">

            <header>
                <nav class="navbar">
                    <div class="brand">
                        <h2>D<span>R</span></h2>
                    </div>
                    <ul class="menu">
                        <li><a class="active" href="/">Home</a></li>
                        <li><a href="/contacto">Contact</a></li>
                        <li><a href="/proyectos">Proyects</a></li>
                        <li><a href="#">Sobre Mi</a></li>
                    </ul>

                </nav>
            </header>
           
        </div>

    )
}


export default Navbar
