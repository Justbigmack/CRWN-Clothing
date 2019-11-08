import { triggerNotification } from '../../components/Notification/Notification'

export const addItemToCart = (cartItems, itemToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === itemToAdd.id
  )
  if (existingCartItem) {
    triggerNotification('Item Added to Cart')
    return cartItems.map(cartItem =>
      cartItem.id === itemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    )
  }

  triggerNotification('Item Added to Cart')
  return [...cartItems, { ...itemToAdd, quantity: 1 }]
}

export const removeItem = (cartItems, itemToRemove) => {
  if (itemToRemove.quantity === 1) {
    triggerNotification('Item Removed from cart')
    return cartItems.filter(cartItem => cartItem.id !== itemToRemove.id)
  }

  triggerNotification('Item Removed from cart')
  return cartItems.map(cartItem =>
    cartItem.id === itemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  )
}
