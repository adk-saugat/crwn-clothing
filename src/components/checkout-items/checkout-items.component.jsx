import { useContext } from "react"
import { CartContext } from "../../components/context/cartContext"
import "./checkout-items.styles.scss"

const CheckoutItems = ({ cartItem }) => {
  const { name, imageUrl, quantity, price } = cartItem
  const { addItemToCart, subtractItemFromCart, deleteItemFromCart } =
    useContext(CartContext)

  const handleQuantityIncrease = (cartItem) => {
    addItemToCart(cartItem)
  }

  const handleQuantityDecrease = (cartItem) => {
    subtractItemFromCart(cartItem)
  }

  const handleItemDelete = (cartItem) => {
    deleteItemFromCart(cartItem)
  }
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => handleQuantityDecrease(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => handleQuantityIncrease(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">${price}</span>
      <div className="remove-button" onClick={() => handleItemDelete(cartItem)}>
        &#10005;
      </div>
    </div>
  )
}
export default CheckoutItems
