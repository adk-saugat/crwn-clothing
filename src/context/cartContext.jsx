import { createContext, useState } from "react"

const addCartItem = (
  cartItem,
  productToAdd,
  totalQuantity,
  setTotalQuantity,
  totalPrice,
  setTotalPrice
) => {
  setTotalQuantity(totalQuantity + 1)
  setTotalPrice(totalPrice + productToAdd.price)

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

const subtractCartItem = (
  cartItem,
  product,
  totalQuantity,
  setTotalQuantity,
  totalPrice,
  setTotalPrice
) => {
  return cartItem.map((item) => {
    if (item.id === product.id && item.quantity > 1) {
      setTotalPrice(totalPrice - product.price)
      setTotalQuantity(totalQuantity - 1)
      return { ...item, quantity: item.quantity - 1 }
    }
    return item
  })
}

const deletCartItem = (
  cartItem,
  product,
  totalQuantity,
  setTotalQuantity,
  totalPrice,
  setTotalPrice
) => {
  setTotalPrice(totalPrice - product.price * product.quantity)
  return cartItem.filter((item) => {
    if (item.id === product.id) {
      setTotalQuantity(totalQuantity - item.quantity)
      return false
    }
    return true
  })
}

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItem: [],
  addItemToCart: () => {},
  subtractItemFromCart: () => {},
  deleteItemFromCart: () => {},
  totalQuantity: 0,
  setTotalQuantity: () => {},
  totalPrice: 0,
  setTotalPrice: () => {},
})

const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartItem, setCartItem] = useState([])
  const [totalQuantity, setTotalQuantity] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)

  const addItemToCart = (product) => {
    setCartItem(
      addCartItem(
        cartItem,
        product,
        totalQuantity,
        setTotalQuantity,
        totalPrice,
        setTotalPrice
      )
    )
  }

  const subtractItemFromCart = (product) => {
    setCartItem(
      subtractCartItem(
        cartItem,
        product,
        totalQuantity,
        setTotalQuantity,
        totalPrice,
        setTotalPrice
      )
    )
  }

  const deleteItemFromCart = (product) => {
    setCartItem(
      deletCartItem(
        cartItem,
        product,
        totalQuantity,
        setTotalQuantity,
        totalPrice,
        setTotalPrice
      )
    )
  }
  console.log(cartItem)
  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    subtractItemFromCart,
    deleteItemFromCart,
    cartItem,
    totalQuantity,
    totalPrice,
    setTotalPrice,
  }
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export default CartProvider
