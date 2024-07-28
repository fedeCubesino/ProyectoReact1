import { FaCartShopping } from "react-icons/fa6";

function CartWidget() {
  return (
    <div className="carrito">
        <FaCartShopping size="35px"/>
        <span className="contador">5</span>
    </div>
  )
}

export default CartWidget