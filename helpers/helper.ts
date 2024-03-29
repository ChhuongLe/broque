import { getMaxListeners } from "events";

export const fetchAllProducts = async () => {
  const res = await fetch("http://3.137.191.193/products/?count=500")
  let products = await res.json();
  // sort here instead of in the Categories component???
  let jacketsMap = [], shoesMap = [], accessoriesMap = [], shirtsMap = [], pantsMap = [], allIds = [];
  let url = "";
  for(let obj of products) {
    if(obj.category === "Jackets" || obj.category === "Jacket" || obj.category === "Coats" || obj.catergory === "Coat") {
      url = await(fetchThumbnails(obj.id))
      jacketsMap.push({
        "id": obj.id,
        "price": obj.default_price,
        "name": obj.name,
        "slogan": obj.slogan,
        "description": obj.description,
        "img": url,
      })
    }
    if(obj.category === "Shoes" || obj.category === "Kicks" || obj.category === "Dress Shoes" || obj.category === "Heels") {
      url = await(fetchThumbnails(obj.id))
      shoesMap.push({
        "id": obj.id,
        "price": obj.default_price,
        "name": obj.name,
        "slogan": obj.slogan,
        "description": obj.description,
        "img": url,
      })
    }
    if(obj.category === "Shirt") {
      url = await(fetchThumbnails(obj.id))
      shirtsMap.push({
        "id": obj.id,
        "price": obj.default_price,
        "name": obj.name,
        "slogan": obj.slogan,
        "description": obj.description,
        "img": url,
      })
    }
    if(obj.category === "Accessories" || obj.category === "Sunglasses" || obj.category === "Cap") {
      url = await(fetchThumbnails(obj.id))
      accessoriesMap.push({
        "id": obj.id,
        "price": obj.default_price,
        "name": obj.name,
        "slogan": obj.slogan,
        "description": obj.description,
        "img": url,
      })
    }
    if(obj.category === "Pants") {
      url = await(fetchThumbnails(obj.id))
      pantsMap.push({
        "id": obj.id,
        "price": obj.default_price,
        "name": obj.name,
        "slogan": obj.slogan,
        "description": obj.description,
        "img": url,
      })
    }
  }
  console.log("fetch successful!")
  allIds = [jacketsMap, shoesMap, shirtsMap, accessoriesMap, pantsMap]
  return allIds;
}

export const fetchCategory = async (category: string) => {
  const categoryDictionary = {
    Jackets: ["Jackets", "Jacket", "Coats", "Coat"],
    Pants: ["Pants", "Shorts" ],
    Shoes: ["Kicks", "Shoes", "Pumps", "Dress Shoes", "Heels"],
    Accessories: ["Accessories", "Earrings", "Watches", "Watch", "Earring", "Sunglass", "Cap"],
    Shirts: ["Shirts", "Shirt"]
  }

  let result = [], url = "";

  const res = await(fetch("http://3.137.191.193/products/?count=500"));
  const products = await res.json();

  if(categoryDictionary[category]) {
    for(const obj of products) {
      if(categoryDictionary[category].includes(obj.category)) {
        url = await(fetchThumbnails(obj.id))
        result.push({
          "id": obj.id,
          "price": obj.default_price,
          "name": obj.name,
          "slogan": obj.slogan,
          "description": obj.description,
          "img": url,
        })
      }
    }
  }
  return result;
}

export const fetchThumbnails = async (id: number) => {
  const res = await(fetch(`http://3.137.191.193/products/${id}/styles`))
  let styles = await res.json();
  let thumbnail_url = await styles.results[0].photos[0].url;
  return thumbnail_url;
}

export const getStyles = async (id: number) => {
  const res = await(fetch(`http://3.137.191.193/products/${id}/styles`))
  let styles = await res.json();
  return styles;
}

export const getRelatedItemIds = async (id: number) => {
  const res = await(fetch(`http://3.137.191.193/products/${id}/related`))
  let related = await res.json();
  return related;
}

export const fetchRelatedThumbnails = async(arr: Array<number>) => {
  const res = await Promise.all(
    arr.map((id)=>{
       return fetchThumbnails(id);
    })
  );
  return res;
}

export const fetchProduct = async(id: number) => {
  const res = await(fetch(`http://3.137.191.193/products/${id}/`))
  let product = await res.json();
  return product;
}

export const fetchSeveralProducts = async(arr: Array<number>) => {
  const res = await Promise.all(
    arr.map((id)=>{
       return fetchProduct(id);
    })
  );
  return res;
}