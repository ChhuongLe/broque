import { MapIcon } from "@heroicons/react/24/solid";
import { access } from "fs";

export const fetchAllProducts = async () => {
  const res = await fetch("http://3.137.191.193/products/?count=500")
  let products = await res.json();
  // sort here instead of in the Categories component???
  let jacketsMap = new Map(), shoesMap = new Map(), accessoriesMap = new Map(), shirtsMap = new Map(), pantsMap = new Map(), allIds = [];
  const map = new Map();

  for(let obj of products) {
    if(obj.category === "Jackets" || obj.category === "Jacket" || obj.category === "Coats" || obj.catergory === "Coat") {
      jacketsMap.set(obj.id, [obj.default_price, obj.name, obj.description])
    }
    if(obj.category === "Shoes" || obj.category === "Kicks" || obj.category === "Dress Shoes" || obj.category === "Heels") {
      shoesMap.set(obj.id, [obj.default_price, obj.name, obj.description])
    }
    if(obj.category === "Shirt") {
      shirtsMap.set(obj.id, [obj.default_price, obj.name, obj.description])
    }
    if(obj.category === "Accessories" || obj.category === "Sunglasses" || obj.category === "Cap") {
      accessoriesMap.set(obj.id, [obj.default_price, obj.name, obj.description])
    }
    if(obj.category === "Pants") {
      pantsMap.set(obj.id, [obj.default_price, obj.name, obj.description])
    }
  }
  allIds = [jacketsMap, shoesMap, shirtsMap, accessoriesMap, pantsMap]
  return allIds;
}

export const fetchThumbnails = async (id: number) => {
  const res = await(fetch(`http://3.137.191.193/products/${id}/styles`))
  let styles = await res.json();
  let thumbnail_url = await styles.results[0].photos[0].thumbnail_url;
  return thumbnail_url;
}