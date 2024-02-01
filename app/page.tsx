import Image from "next/image";
import { initFirebase } from "@/firebase/firebase";
import Banner from "@/components/Banner";
import Categories from "@/components/Categories";

export default function Home() {
  return (
    <main className="flex flex-col bg-[#387d7a] w-screen h-screen">
        <Banner />
        <Categories />
    </main>
  );
}
