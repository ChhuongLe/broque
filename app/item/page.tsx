'use client'

import { getStyles } from '@/helpers/helper'
import { useAppStore } from '@/store/store'
import Image from 'next/image'
import { useEffect } from 'react'
import { useState } from 'react'
import Sizes from './Sizes'

export default function Item () {
  const [item] = useAppStore((state)=> [
    state.item,
  ]);

  const [styles, setStyles] = useState([]);
  const [currImage, setCurrImage] = useState("");

  let varianceArr = [];

  useEffect(()=>{
    getStyles(item.id)
      .then(data => {
        setStyles(data.results);
      })
      .catch(error => {
        console.log(error)
      });
  }, [])

  let currStyle:string = "";
  let skus:any = {};

  if(styles[0]) {
    currStyle = styles[0].name;
    skus = styles[0].skus;

    for(let i = 0; i < styles.length; i++) {
      varianceArr.push(styles[i].photos[0].thumbnail_url);
    }
  }

  return (
    <div>
      <div className='flex flex-row'>
        <div className='flex relative w-[500px] h-[600px]'>
          <div className='grid grid-row-6 overflow-hidden'>
            {
              varianceArr.map((el)=>{
                console.log(el)
                return(
                  <Image src={el} alt="" width={100} height={10}/>
                )
              })
            }
          </div>
          <div className='flex relative w-[400px] h-[600px]'>
            <Image src={item.img} alt="" objectFit='cover' layout='fill'/>
          </div>
        </div>
        <div className='flex flex-col'>
          <span>{item.name}</span>
          <span>{item.price}</span>
          <span>{item.slogan}</span>
          <span>Style: {currStyle}</span>
          <Sizes skus={skus}/>
        </div>
      </div>
    </div>
  )
}