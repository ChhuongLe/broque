import Image from "next/image";


export default function ItemCard({id, price, name, description, img}) {
  return (
    <div className="flex flex-col w-[300px] h-[300px]">
      <div className="flex relative w-[200px] h-[200px]">
        <Image src={img} alt="" objectFit="cover" layout="fill"/><br />
      </div>
      <p className="ml-[-225px]">Price: {price}</p>
      <p className="mr-[300px]">{name}</p>
    </div>
  )
}