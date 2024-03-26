import { fetchRelatedThumbnails, fetchSeveralProducts } from "@/helpers/helper";
import { useAppStore } from "@/store/store";
import Image from "next/image";
import { useEffect, useState } from "react"

export default function Related ({ relatedIds }) {
  const [item] = useAppStore((state)=> [
    state.item,
  ]);

  const [related, setRelated] = useState(relatedIds)
  const [relatedImg, setRelatedImg] = useState([])
  const [itemNames, setItemNames] = useState([])

  useEffect(()=> {
    fetchRelatedThumbnails(related)
      .then(data => {
          data.shift();
          setRelatedImg(data);
      });

    fetchSeveralProducts(related)
    .then(data => {
      data.shift();
      setItemNames(data);
    });
  },[]);

  return (
    <div className="flex flex-row space-x-2 lg:space-x-10">
      {
        relatedImg.map((el, index)=>{
          console.log(index)
          return (
            <div className='flex flex-col relatative w-[302px] h-[400px] border border-black'>
              <div className="relative w-[300px] h-[300px]">
                <Image src={el} alt='' objectFit="cover" layout="fill"/>
              </div>
              <span>{itemNames[index] ? itemNames[index].name : "N/A"}</span>
              <span>Price: {itemNames[index] ? itemNames[index].default_price : "N/A"}</span>
            </div>
          )
        })
      }
    </div>
  )
}