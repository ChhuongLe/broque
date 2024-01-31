"use client";

import { ShoppingCartIcon, UserCircleIcon } from "@heroicons/react/24/solid"
import Image from 'next/image'
import Link from 'next/link'
import { initFirebase } from "@/firebase/firebase"
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { useAuthState } from 'react-firebase-hooks/auth'
import { useRouter } from "next/navigation"
import { useState } from 'react'
import { connectStorageEmulator } from "firebase/storage";

export default function Header () {
  initFirebase();
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  const [user, loading] = useAuthState(auth);
  const router = useRouter();

  const [username, setUsername] = useState('')

  const signIn = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result.user);
    if(result) {
      setUsername(result.user.displayName);
    }
  }

  if(loading){
    return <div>Loading...</div>
  }
  if(user) {
    router.push("/dashboard")
  }


  return (
    <div className="bg-[#395e66] w-full">
      <div className="flex text-white mx-auto items-center justify-between max-w-7xl">
        <div className="text-white space-x-5 p-5">
          <span>Mens</span>
          <span>Womens</span>
        </div>
        <div><Link href='/'><Image src="https://i.imgur.com/847i1mE.png" alt="" width={100} height={150} /></Link></div>
        <div className="flex space-x-5 p-5 text-white">
          <span className="cursor-pointer h-6 w-6"><UserCircleIcon /></span>
          <ShoppingCartIcon className="h-6 w-6"/>
        </div>
      </div>
    </div>

  )
}