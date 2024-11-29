import "./cart-dropdown.styles.scss"
import Button from "../button/button.component"
import { useContext } from "react"
import { CartContext } from "../context/cartContext"
import CartItem from "../cart-item/cart-item.component"

const CartDropdown = () => {
  const { cartItem } = useContext(CartContext)
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItem.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  )
}
export default CartDropdown
