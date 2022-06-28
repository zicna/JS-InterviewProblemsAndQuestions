const ShoppingCart2 = (function () {
  const cart = []
  const shippingCost = 10
  const tottalPrice = 237
  const totalQuality = 23

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity })
    console.log(`${quantity} ${product} added to cart`)
  }

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier`)
  }

  return {
    addToCart,
    cart,
    tottalPrice,
    totalQuality,
  }
})()

ShoppingCart2.addToCart('apple', 2)
ShoppingCart2.addToCart('pizza', 12)
