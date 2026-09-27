import Navbar from "./components/Navbar"
import BrandPresentation from "./components/BrandPresentation"
import "./App.css"

// Organiza la navegación y el contenido principal de la aplicación.
function App() {
    return (
        <>
            <Navbar />

            <main
                id="inicio"
                className="presentacion"
            >
                <BrandPresentation />
            </main>
        </>
    )
}

export default App