"use client";

import { ShoppingCartIcon } from "@heroicons/react/24/solid"
import Link from 'next/link'
import { initFirebase } from "@/firebase/firebase"
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"

export default function Header () {
  initFirebase();
  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  const signIn = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result.user);
  }
  return (
    <div className="flex text-white mx-auto bg-[#35524A] items-center justify-between max-w-7xl">
      <div className="text-white space-x-5 p-5">
        <span>Mens</span>
        <span>Womans</span>
      </div>
      <div><Link href='/'>Logo</Link></div>
      <div className="flex space-x-5 p-5 text-white">
        <span className="cursor-pointer" onClick={signIn}>Login</span>
        <ShoppingCartIcon className="h-6 w-6"/>
      </div>
    </div>
  )
}