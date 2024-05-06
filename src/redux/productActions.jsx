export const updateProductQuantity = (productId, quantity) => ({
    type: 'UPDATE_PRODUCT_QUANTITY',
    payload: { productId, quantity }
  });
  
  export const deleteProduct = productId => ({
    type: 'DELETE_PRODUCT',
    payload: productId
  });
  