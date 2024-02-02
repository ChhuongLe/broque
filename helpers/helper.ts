export const fetchAllProducts = async () => {
  const res = await fetch("http://3.137.191.193/products/?count=500")
  let products = await res.json();
  return products;
}