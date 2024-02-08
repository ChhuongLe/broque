'use client'

import { useAppStore } from '@/store/store';
import Image from 'next/image'

export default function Category () {
  const [category, itemMap] = useAppStore((state)=>[
    state.category,
    state.itemMap,
  ])

  // initialize variables to use
  let idNum: Array<number> = [];
  let thumbnails: Array<string> = [], itemName: Array<string> = [], itemDesc: Array<string>= [], price: Array<number> = [];

  

  let motto = ""

  if(category === "Jackets") {
    motto = "It's cold out there! Take these with you!"
  }

  return (
    <div>
      <h2>{category}</h2>
      <span>{motto}</span>
      <div>
        {thumbnails!.map((el)=>{
          return(
            <div>
              <Image src={el} alt="" width={60} height={60} />
            </div>
          );
        })}
      </div>
    </div>
  )
}