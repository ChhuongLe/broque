import { access } from "fs";

export const fetchAllProducts = async () => {
  const res = await fetch("http://3.137.191.193/products/?count=500")
  let products = await res.json();
  // sort here instead of in the Categories component???
  let jacketsId = [], shoesId = [], accessoriesId = [], shirtsId = [], allIds = [];

  for(let obj of products) {
    if(obj.category === "Jacket") jacketsId.push(obj.id)
    if(obj.category === "Shoes" || obj.category === "Kicks" || obj.category === "Dress Shoes" || obj.category === "Heels") shoesId.push(obj.id)
    if(obj.category === "Shirt") shirtsId.push(obj.id)
    if(obj.category === "Accessories" || obj.category === "Sunglasses" || obj.category === "Cap") accessoriesId.push(obj.id)
  }
  allIds = [jacketsId, shoesId, shirtsId, accessoriesId]
  return allIds;
}

export const fetchThumbnails = async (id: number) => {
  const res = await(fetch(`http://3.137.191.193/products/${id}/styles`))
  let styles = await res.json();
}