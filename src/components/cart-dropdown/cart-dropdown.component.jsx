import "./cart-dropdown.styles.scss"
import Button from "../button/button.component"
import { useContext } from "react"
import { CartContext } from "../context/cartContext"
import CartItem from "../cart-item/cart-item.component"
import { Link } from "react-router-dom"

const CartDropdown = () => {
  const { cartItem, isCartOpen, setIsCartOpen } = useContext(CartContext)

  const closeDropdown = () => {
    setIsCartOpen(!isCartOpen)
  }
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItem.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Link to="/checkout" onClick={closeDropdown}>
        <Button>GO TO CHECKOUT</Button>
      </Link>
    </div>
  )
}
export default CartDropdown
