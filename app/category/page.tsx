'use client'

import { useAppStore } from '@/store/store';
import ItemCard from './ItemCard';

export default function Category () {
  const [category, itemMap] = useAppStore((state)=>[
    state.category,
    state.itemMap,
  ])

  console.log(itemMap)

  let motto = ""

  if(category === "Jackets") {
    motto = "It's cold out there! Take these with you!"
  }

  return (
    <div>
      <h2>{category}</h2>
      <span>{motto}</span>
      <div>
      {itemMap!.map((el)=>{
        return (
          <ItemCard id={el.id} price={el.price} name={el.name} description={el.description} img={el.img} />
        )
      })}
      </div>
    </div>
  )
}