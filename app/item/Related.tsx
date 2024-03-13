import { fetchThumbnails, getRelatedItemIds } from "@/helpers/helper";
import { useAppStore } from "@/store/store";
import { useEffect, useState } from "react"

export default function Related () {
  const [item] = useAppStore((state)=> [
    state.item,
  ]);

  const [related, setRelated] = useState([])
  let temp = []

  useEffect(()=> {
    getRelatedItemIds(item.id)
      .then(data => {
        setRelated(data);
      })
      .catch(error=> {
        console.log(error)
      });
  },[]);

  console.log(temp);
  return (
    <div>Hello From Related</div>
  )
}