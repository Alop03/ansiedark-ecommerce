import { FiShoppingBag } from "react-icons/fi"

// Representa el acceso visual al futuro carrito de compras.
function CartWidget() {
    const cantidadProductos = 0

    return (
        <button
            className="carrito"
            type="button"
            aria-label={`Carrito con ${cantidadProductos} productos`}
        >
            <FiShoppingBag
                className="carrito__icono"
                aria-hidden="true"
            />

            <span className="carrito__cantidad">
                {cantidadProductos}
            </span>
        </button>
    )
}

export default CartWidget
