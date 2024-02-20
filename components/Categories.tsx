'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { fetchAllProducts, fetchThumbnails } from '@/helpers/helper'
import { useAppStore } from '@/store/store'
import Link from "next/link"
import imageData from "../public/categoryData.json"

export default function Categories () {
  const [data, setData] = useState<any[]>([])

  const [category, setCatetory, itemMap, setItemMap] = useAppStore((state)=>[
    state.category,
    state.setCategory,
    state.itemMap,
    state.setItemMap,
  ])

  console.log(imageData)

  // get all the products first
  useEffect(()=>{
    fetchAllProducts()
      .then(data => {
        setData(data);
      })
      .catch(error=>{
        console.log(error);
      })
  },[]);

  const handleSelection = () => {

  }
  // data should not change
  const jacketsMap = data[0], shoesMap = data[1], accessoriesMap = data[2], shirtsMap = data[3] , pantsMap = data[4];
  let selectedMap: Array<any> = [];
//-----------------------------------------FUNCTIONS---------------------------------------------------------------------------------
  // If a user clicks on a category, this function will check which category was selected and get data to send to the category page
  const handleClick = async(category: string) => {
    if(category === "Jackets") {selectedMap = jacketsMap;}
    if(category === "Accessories") selectedMap = accessoriesMap;
    if(category === "Pants") selectedMap = pantsMap;
    if(category === "Shoes") selectedMap = shoesMap;
    if(category === "Shirts") selectedMap = shirtsMap;

    setItemMap(selectedMap);
    setCatetory(category);
  }

  return (
    <div>
      <h1 className='text-white text-3xl font-bold pt-10 pb-5 w-screen pl-5'>Shop Categories</h1>
      <div className='flex flex-row space-x-5 pb-10 items-center justify-around'>
      {
         imageData.images.map((el)=>{
          return(
            <Link className='flex relative w-[200px] xl:w-[350px] h-[200px] xl:h-[350px] hover:cursor-pointer hover:grayscale transition duration-300 ease-in-out z-0' onClick={e=>(handleClick(e.target.innerText))} href={"/category"}>
              <div className='flex absolute h-full w-full opacity-0 hover:opacity-70 transition duration-300 ease-in-out z-10 items-center justify-center hover:bg-black'>
                <p className='text-sm lg:text-2xl font-bold text-white opacity-100'>{el.category}</p>
              </div>
              <Image
                src={el.url}
                alt=""
                layout='fill'
                objectFit='cover'
              />
            </Link>
          )
        })
      }
      </div>
    </div>
  )
}