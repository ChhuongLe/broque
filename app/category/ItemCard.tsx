import Image from "next/image";
import Link from "next/link";
import { useAppStore } from '@/store/store'
import { staticGenerationAsyncStorage } from "next/dist/client/components/static-generation-async-storage.external";

export default function ItemCard({id, price, name, slogan, description, img}) {
  const [item, setItem] = useAppStore((state)=> [
    state.item,
    state.setItem
  ])
  const handleClick = () => {
    const newItem = {
      "id": id,
      "name": name,
      "price": price,
      "slogan": slogan,
      "description": description,
      "img": img,
    }
    setItem(newItem);
  }
  return (
    <div className="flex flex-col relative w-[300px] h-[300px] lg:w-[600px] lg:h-[600px]">
      <div className="flex relative w-[200px] h-[200px] lg:w-[500px] lg:h-[500px]">
        <Link href="/item"><Image src={img} alt="" objectFit="cover" layout="fill" onClick={handleClick} /><br /></Link>
      </div>
      <div className="flex flex-col text-left">
        <p className="mr-auto text-md lg:text-xl text-bold">{name}</p>
        <p className="mr-auto text-xs lg:text-md ">${price}</p>
      </div>
    </div>
  )
}