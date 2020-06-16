export const showOrderNumber = (order) => {
  const num = Number(order);
  if (!isNaN(num)) {
    return num < 999 ? num : null
  } return order;
}
