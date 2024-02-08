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

  for (let el of itemMap) {
    idNum.push(el[0]);
    price.push(el[1][0]);
    itemName.push(el[1][1]);
    itemDesc.push(el[1][2]);
    thumbnails.push(el[1][3]);
  }

  console.log(thumbnails);

  let motto = ""

  if(category === "Jackets") {
    motto = "It's cold out there! Take these with you!"
  }

  return (
    <div>
      <h2>{category}</h2>
      <span>{motto}</span>
      <div>
        {thumbnails!.map((el)=> {
          return (
          <div>
            <Image src={el} alt="" width={60} height={60} />
          </div>)
        })}
      </div>
      <div>
        {price!.map((el)=>{
          return (
            <div>
              price: {el}
            </div>
          )
        })}
      </div>
    </div>
  )
}