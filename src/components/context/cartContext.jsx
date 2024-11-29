import { createContext, useState } from "react"

const addCartItem = (
  cartItem,
  productToAdd,
  totalQuantity,
  setTotalQuantity
) => {
  setTotalQuantity(totalQuantity + 1)
  const existingCartItem = cartItem.find((item) => item.id === productToAdd.id)

  if (existingCartItem) {
    return cartItem.map((item) =>
      item.id === productToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    )
  }

  return [...cartItem, { ...productToAdd, quantity: 1 }]
}

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItem: [],
  addItemToCart: () => {},
  totalQuantity: 0,
  setTotalQuantity: () => {},
})

const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartItem, setCartItem] = useState([])
  const [totalQuantity, setTotalQuantity] = useState(0)

  const addItemToCart = (product) => {
    setCartItem(addCartItem(cartItem, product, totalQuantity, setTotalQuantity))
  }
  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItem,
    totalQuantity,
  }
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export default CartProvider
