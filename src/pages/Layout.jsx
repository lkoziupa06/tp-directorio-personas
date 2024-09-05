import { Outlet, Link } from "react-router-dom";
export default function Layout(){
    return(
        <>
            <nav>
                <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/persona">Persona</Link>
                </li>
                <li>
                    <Link to="/contacto">Contacto</Link>
                </li>
                <li>
                    <Link to="/estadisticas">Estadisticas</Link>
                </li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
}
