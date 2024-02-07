'use client'

import { useAppStore } from '@/store/store';
import Image from 'next/image'

export default function Category () {
  const [thumbnails, category] = useAppStore((state)=>[
    state.thumbnails,
    state.category
  ])

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