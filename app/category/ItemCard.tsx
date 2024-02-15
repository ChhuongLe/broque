import Image from "next/image";


export default function ItemCard({id, price, name, description, img}) {
  return (
    <div className="flex flex-col w-[300px] h-[300px] lg:w-[600px] lg:h-[600px]">
      <div className="flex relative w-[200px] h-[200px] lg:w-[500px] lg:h-[500px]">
        <Image src={img} alt="" objectFit="cover" layout="fill"/><br />
      </div>
      <p className="mr-auto text-md lg:text-xl ">Price: {price}</p>
      <p className="mr-auto text-md lg:text-xl">{name}</p>
    </div>
  )
}