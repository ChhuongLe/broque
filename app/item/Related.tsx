import { fetchRelatedThumbnails, fetchThumbnails, getRelatedItemIds } from "@/helpers/helper";
import { useAppStore } from "@/store/store";
import Image from "next/image";
import { useEffect, useState } from "react"

export default function Related () {
  const [item] = useAppStore((state)=> [
    state.item,
  ]);

  const [related, setRelated] = useState([])
  const [relatedImg, setRelatedImg] = useState([])

  useEffect(()=> {
    getRelatedItemIds(item.id)
      .then(data => {
        setRelated(data);
      })
      .catch(error=> {
        console.log(error)
      });
  },[]);

  if(related.length !== 0) {
    fetchRelatedThumbnails(related)
    .then(data => {
      data.shift()
      setRelatedImg(data);
    });
  }

  return (
    <div>
      {
        relatedImg.map((el)=>{
          return (
            <div>
              <Image src={el} alt='' width={60} height={60}/>
            </div>
          )
        })
      }
    </div>
  )
}