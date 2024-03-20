import { fetchProduct, fetchRelatedThumbnails, fetchThumbnails, getRelatedItemIds } from "@/helpers/helper";
import { useAppStore } from "@/store/store";
import Image from "next/image";
import { useEffect, useState } from "react"

export default function Related () {
  const [item] = useAppStore((state)=> [
    state.item,
  ]);

  const [related, setRelated] = useState([])
  const [relatedImg, setRelatedImg] = useState([])
  const [itemNames, setItemNames] = useState([])

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

    fetchProduct(1)
    .then(data => {
      console.log(data);
    })
  }


  return (
    <div className="flex flex-row">
      {
        relatedImg.map((el)=>{
          return (
            <div className="relative w-[300px] h-[300px] px-[5px]">
              <Image src={el} alt='' objectFit="cover" layout="fill"/>
            </div>
          )
        })
      }
    </div>
  )
}