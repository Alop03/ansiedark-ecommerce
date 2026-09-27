import CartWidget from "./CartWidget"
import "./Navbar.css"

// Navegación principal con las categorías reales de la joyería.
function Navbar() {
    return (
        <header className="encabezado">
            <nav
                className="navbar"
                aria-label="Navegación principal"
            >
                <a
                    className="navbar__marca"
                    href="#inicio"
                    aria-label="Ansiedark, ir al inicio"
                >
                    Ansiedark
                </a>

                <ul className="navbar__categorias">
                    <li>
                        <a href="#anillos">Anillos</a>
                    </li>

                    <li>
                        <a href="#collares">Collares</a>
                    </li>

                    <li>
                        <a href="#pulseras">Pulseras</a>
                    </li>
                </ul>

                <CartWidget />
            </nav>
        </header>
    )
}

export default Navbar
