import { fetchRelatedThumbnails, fetchSeveralProducts } from "@/helpers/helper";
import { useAppStore } from "@/store/store";
import Image from "next/image";
import { useEffect, useState } from "react"

export default function Related ({ relatedIds }) {
  const [item] = useAppStore((state)=> [
    state.item,
  ]);

  console.log("Related Ids: ", relatedIds)

  const [related, setRelated] = useState(relatedIds)
  const [relatedImg, setRelatedImg] = useState([])
  const [itemNames, setItemNames] = useState([])

  useEffect(()=> {
    fetchRelatedThumbnails(related)
      .then(data => {
          data.shift();
          setRelatedImg(data);
      })
      .catch(error=> {
        console.log(error)
      });

    fetchSeveralProducts(related)
    .then(data => {
      console.log(data);
      data.shift();
      setItemNames(data);
    });
  },[]);

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