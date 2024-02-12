import Image from "next/image";


export default function ItemCard({id, price, name, description, img}) {
  return (
    <div>
      <Image src={img} alt="" width={60} height={60}/>
      {price}
      {name}
      <span>{description}</span>
    </div>
  )
}