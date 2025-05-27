export const createOrder = (req, res) => {
  const { address, cartItems, totalAmount } = req.body;

  // Simple validation
  if (
    !address ||
    !address.firstName?.trim() ||
    !address.lastName?.trim() ||
    !address.street?.trim() ||
    !address.state?.trim() ||
    !address.zip?.trim() ||
    !cartItems ||
    !Array.isArray(cartItems) ||
    cartItems.length === 0 ||
    !totalAmount
  ) {
    return res.status(400).json({
      message: 'Invalid order data. Please check your input.',
    });
  }

  const receipt = {
    orderId: Math.floor(Math.random() * 1000000), // random order number
    date: new Date().toISOString(),
    address,
    cartItems,
    totalAmount,
  };

  console.log('New Order Received:', {
    address,
    cartItems,
    totalAmount,
  });

  // You could save the order to a database here

  res.status(201).json({
    message: 'Order placed successfully',
    receipt,
  });
};
