import Image from "next/image"

export default function Banner () {
  return(
    <div className="relative items-center w-screen h-[500px]">
      <Image src="https://i.imgur.com/4FYmCK4.png" alt="" layout="fill" objectFit="cover"/>
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-2xl text-white font-bold">For all your <i className="text-[#cdc6ae]">BROQUE</i> fashion needs.</p>
        <button className="text-[#cdc6ae] bg-[#387d7a] px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">Shop Categories</button>
      </div>
    </div>
  )
}