import "./checkout.styles.scss"
import { useContext } from "react"
import { CartContext } from "../../context/cartContext"
import CheckoutItems from "../../components/checkout-items/checkout-items.component"

function Checkout() {
  const { totalPrice, cartItem } = useContext(CartContext)
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItem.map((item) => {
        return <CheckoutItems key={item.id} cartItem={item} />
      })}
      <span className="total">Total: ${totalPrice}</span>
    </div>
  )
}

export default Checkout
