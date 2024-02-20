'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { fetchAllProducts, fetchCategory, fetchThumbnails } from '@/helpers/helper'
import { useAppStore } from '@/store/store'
import Link from "next/link"
import imageData from "../public/categoryData.json"
import { set } from 'firebase/database'

export default function Categories () {
  const [setCatetory, setItemMap] = useAppStore((state)=>[
    state.setCategory,
    state.setItemMap,
  ])

  const handleSelection = async(category:string) => {
    fetchCategory(category)
      .then(data => {
        setItemMap(data);
      })
      .catch(error => {
        console.log(error);
      });
      setCatetory(category);
  }

  return (
    <div>
      <h1 className='text-white text-3xl font-bold pt-10 pb-5 w-screen pl-5'>Shop Categories</h1>
      <div className='flex flex-row space-x-5 pb-10 items-center justify-around'>
      {
         imageData.images.map((el)=>{
          return(
            <Link className='flex relative w-[200px] xl:w-[350px] h-[200px] xl:h-[350px] hover:cursor-pointer hover:grayscale transition duration-300 ease-in-out z-0' onClick={e=>(handleSelection(e.target.innerText))} href={"/category"}>
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