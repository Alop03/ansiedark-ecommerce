import "./App.css"

// Componente principal de presentación del e-commerce.
function App() {
    return (
        <main className="presentacion">
            <section className="presentacion__contenido">
                <p className="presentacion__etiqueta">
                    Joyería por suscripción
                </p>

                <h1 className="presentacion__titulo">
                    Ansiedark
                </h1>

                <p className="presentacion__descripcion">
                    Joyas para quienes hacen de su identidad una estética.
                </p>

                <span className="presentacion__estado">
                    Próximamente
                </span>
            </section>
        </main>
    )
}

export default App