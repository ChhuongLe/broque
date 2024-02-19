'use client'

import { useAppStore } from '@/store/store';
import ItemCard from './ItemCard';

export default function Category () {
  const [category, itemMap] = useAppStore((state)=>[
    state.category,
    state.itemMap,
  ])

  let motto = ""

  if(category === "Jackets") {
    motto = "It's cold out there! Take these with you!"
  } else if (category === "Accessories") {
    motto = "Look cool you fool! Take these accessories out there and rock them socks!"
  }

  return (
    <div className='flex flex-col py-10 w-screen'>
      <div className='items-center text-center mx-auto max-w-7xl'>
        <h2 className='text-3xl font-bold p-3'>{category}</h2>
        <span className='text-m'>{motto}</span>
        <div className='grid grid-cols-2 py-10 mr-[-100px] gap-x-32'>
          {itemMap!.map((el)=>{
            return (
              <ItemCard id={el.id} price={el.price} name={el.name} description={el.description} slogan={el.slogan} img={el.img} />
            )
          })}
        </div>
      </div>
    </div>
  )
}