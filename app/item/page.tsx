'use client'

import { getRelatedItemIds, getStyles } from '@/helpers/helper'
import { useAppStore } from '@/store/store'
import Image from 'next/image'
import { useEffect } from 'react'
import { useState } from 'react'
import Sizes from './Sizes'
import Related from './Related'

export default function Item () {
  const [item] = useAppStore((state)=> [
    state.item,
  ]);

  const [styles, setStyles] = useState([]);
  const [currImage, setCurrImage] = useState(item.img);
  const [currStyle, setCurrStyle] = useState("");
  const [relatedIds, setRelatedIds] = useState([]);

  let stylesArr:any = [];
  let selectedStyle = "";

  useEffect(()=>{
    getStyles(item.id)
      .then(data => {
        setStyles(data.results);
      })
      .catch(error => {
        console.log(error)
      });

      getRelatedItemIds(item.id)
      .then(data => {
        setRelatedIds(data)
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  let skus:any = {};

  if(styles[0]) {
    skus = styles[0].skus;
    selectedStyle = styles[0].name;

    for(let i = 0; i < styles.length; i++) {
      stylesArr.push(styles[i].photos[0].url);
    }
  }

  const handleClick = (e) => {
    setCurrImage(stylesArr[e.target.id]);
    setCurrStyle(styles[e.target.id].name);
  }

  return (
    <div className='py-[50px] w-screen'>
      <div className='flex flex-row justify-around max-w-7xl mr-auto'>
        <div className='flex relative w-[500px] h-[600px]'>
          <div className='grid grid-row-6 space-y-3 overflow-y-scroll no-scrollbar'>
            {
              stylesArr.map((el,idx)=>{
                return(
                  <div className='flex relative w-[100px] h-[100px]'>
                    <div key={idx} className='cursor-pointer' onClick={((e) => {handleClick(e)})}><Image id={idx} src={el} alt="" layout='fill' objectFit='cover'/></div>
                  </div>
                )
              })
            }
          </div>
          <div className='flex relative w-[400px] h-[600px]' onClick={handleClick}>
            <Image src={currImage} alt="" objectFit='cover' layout='fill'/>
          </div>
        </div>
        <div className='flex flex-col'>
          <span className='text-lg font-bold lg:text-3xl'>{item.name}</span>
          <span className='text-sm lg:text-lg'>${item.price}</span>
          <span className='text-sm lg:text-lg'>{item.slogan}</span>
          <span className='text-sm lg:text-lg'>Style: {currStyle ? currStyle : selectedStyle}</span>
          <Sizes skus={skus} />
          <button className='bg-[#99937f] hover:bg-[#cdc6ae]  p-[15px] mt-[10px] rounded font-bold text-white'>Add to Cart</button>
        </div>
      </div>
      <div className='flex flex-col max-w-7xl justify-center items-center'>
        <h2 className='text-2xl font-bold pt-[30px]'>Related Items</h2>
        <Related relatedIds={relatedIds} />
      </div>
    </div>
  )
}