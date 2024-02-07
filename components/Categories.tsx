'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { fetchAllProducts, fetchThumbnails } from '@/helpers/helper'
import { useAppStore } from '@/store/store'
import Link from "next/link"

export default function Categories () {
  const [data, setData] = useState<any[]>([])

  const [setThumbnails, thumbnails, category, setCatetory] = useAppStore((state)=>[
    state.setThumbnails,
    state.thumbnails,
    state.category,
    state.setCategory
  ])

  let arr: any[] = [];
  let thumbnailURL: Promise<any>;

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

  console.log

  // data should not change
  const jacketsMap = data[0], shoesMap = data[1], accessoriesMap = data[2], shirtsMap = data[3] , pantsMap = data[4];

//-----------------------------------------FUNCTIONS---------------------------------------------------------------------------------
  // If a user clicks on a category, this function will check which category was selected and get data to send to the category page
  const handleClick = async(category: string) => {
    let selectedMap;

    if(category === "Jackets") selectedMap = jacketsMap;
    if(category === "Accessories") selectedMap = accessoriesMap;
    if(category === "Pants") selectedMap = pantsMap;
    if(category === "Shoes") selectedMap = shoesMap;
    if(category === "Shirts") selectedMap = shirtsMap;

    for(let el of selectedMap) {
      thumbnailURL = await (fetchThumbnails(el))
        .then(arr.push(thumbnailURL))
    }
    arr.shift();
    setThumbnails(arr);
    setCatetory(category);
  }

  return (
    <div>
      <h1 className='text-white text-3xl font-bold pt-10 pb-5 w-screen pl-5'>Shop Categories</h1>
      <div className='flex flex-row space-x-5 pb-10 items-center justify-around'>
        <Link className='flex relative w-[200px] xl:w-[350px] h-[200px] xl:h-[350px] hover:cursor-pointer hover:grayscale transition duration-300 ease-in-out z-0' onClick={e=>(handleClick(e.target.innerText))} href={"/category"}>
          <div className='flex absolute h-full w-full opacity-0 hover:opacity-70 transition duration-300 ease-in-out z-10 items-center justify-center hover:bg-black'>
            <p className='text-sm lg:text-2xl font-bold text-white opacity-100'>Jackets</p>
          </div>
          <Image
            src="https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"
            alt=""
            layout='fill'
            objectFit='cover'
          />
        </Link>
        {/* Should really refactor this code once things are fleshed out more, very repetitive */}
        <div className='flex relative w-[200px] xl:w-[350px] h-[200px] xl:h-[350px] hover:cursor-pointer hover:grayscale transition duration-300 ease-in-out z-0' onClick={e=>(handleClick(e.target.innerText))}>
          <div className='flex absolute h-full w-full opacity-0 hover:opacity-70 transition duration-300 ease-in-out z-10 items-center justify-center hover:bg-black'>
            <p className='text-sm lg:text-2xl font-bold text-white opacity-100'>Accessories</p>
          </div>
          <Image src="https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" alt="" layout='fill' objectFit='cover'/>
        </div>
        <div className='flex relative w-[200px] xl:w-[350px] h-[200px] xl:h-[350px] hover:cursor-pointer hover:grayscale transition duration-300 ease-in-out z-0' onClick={e=>(handleClick(e.target.innerText))}>
          <div className='flex absolute h-full w-full opacity-0 hover:opacity-70 transition duration-300 ease-in-out z-10 items-center justify-center hover:bg-black'>
            <p className='text-sm lg:text-2xl font-bold text-white opacity-100'>Pants</p>
          </div>
          <Image src="https://images.unsplash.com/photo-1552902865-b72c031ac5ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80" alt="" layout='fill' objectFit='cover'/>
        </div>
        <div className='flex relative w-[200px] xl:w-[350px] h-[200px] xl:h-[350px] hover:cursor-pointer hover:grayscale transition duration-300 ease-in-out z-0' onClick={e=>(handleClick(e.target.innerText))}>
          <div className='flex absolute h-full w-full opacity-0 hover:opacity-70 transition duration-300 ease-in-out z-10 items-center justify-center hover:bg-black'>
            <p className='text-sm lg:text-2xl font-bold text-white opacity-100'>Shoes</p>
          </div>
          <Image src="https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" alt="" layout='fill' objectFit='cover'/>
        </div>
        <div className='flex relative w-[200px] xl:w-[350px] h-[200px] xl:h-[350px] hover:cursor-pointer hover:grayscale transition duration-300 ease-in-out z-0' onClick={e=>(handleClick(e.target.innerText))}>
          <div className='flex absolute h-full w-full opacity-0 hover:opacity-70 transition duration-300 ease-in-out z-10 items-center justify-center hover:bg-black'>
            <p className='text-sm lg:text-2xl font-bold text-white opacity-100'>Shirts</p>
          </div>
          <Image src="https://images.unsplash.com/photo-1534481909716-9a482087f27d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80" alt="" layout='fill' objectFit='cover'/>
        </div>
      </div>
    </div>
  )
}