import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
   
    <main className="w-screen h-screen relative">
  <div className="flex items-center w-full h-full bg-cover bg-center" style={{backgroundImage:'url(/main-bg.webp)'}}>
 <div className="pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px] ">
  <h1 className="text-[50px] text-white font-semibold">
    Make anything possible with
   
  </h1>
  <p className="text-gray-200 hidden md:block">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, nihil corrupti animi vitae at doloribus!
  </p>
  <div className="flex-col md:flex-row hidden md:flex gap-5 ">
    
    <Link href="/my-skills" className="rounded-[20px] group bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white">
    Learn more</Link>


    <Link href="/my-project" 
    className="rounded-[20px] group relative bg-transparent border-white border px-5 py-3 text-lg text-white max-w-[200px]">
    <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacty-20"/>
    My Project</Link>


    <Link href="/contact-me" 
    className="rounded-[20px] group relative border-white border  bg-transparent px-5 py-3 text-lg text-white">
    <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacty-20"/>
    Contact me</Link>
  </div>


  
  
 </div>
  </div>
  <div className="flex absolute bottom-10  z-[20] right-5 flex-col md:flex-row md:hidden  gap-5">
    <Link href="/my-skills" className="rounded-[20px] relative group bg-blue-500 px-5 py-3 text-lg text-white">
    Learn more</Link>
    <Link href="/my-project" className="rounded-[20px]  border-white border group relative bg-transparent px-5 py-3 text-lg text-white">
    My Project</Link>
    <Link href="/contact-me" className="rounded-[20px]  border-white  border group relative bg-transparent px-5 py-3 text-lg text-white">
    Contact me</Link>
  </div>
  <div className="absolute bottom-0 right-0 z-[10]">
<Image 
src="/horse.png"
alt="horse"
width={300}
height={300}
className="absolute right-55  top-40"
/>
<Image 
src="/cliff.webp"
alt="cliff"
width={480}
height={480}

/>
  </div>
  <div className="absolute bottom-0 w-full h-auto z-[5]">
  <Image 
src="/trees.webp"
alt="tress"
width={2000}
height={2000}
className="w-full h-full"
/>
  </div>
  <Image 
src="/stars.png"
alt="stars"
width={300}
height={300}
className="absolute top-10 left-0 z-[10]"
/>
    </main>
  
  );
}
