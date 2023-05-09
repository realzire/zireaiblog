import Image from "next/image";
import Link from "next/link";


function Header() {
    return (
        <header className="flex items=center justify-between space-x-2 font-bold px-10 py-5"> 
            <div className="flex items-center space-x-2">
                <Link href="/">
                    <Image
                    src = '/logo.jpg'  
                    width={50}
                    className="rounded-full"
                    height={50}
                    alt="logo"
                    />
                </Link>
                <h1>ZireAI</h1>
            </div>
            <div>
                <Link
                    href="https://www.youtube.com/c/realzire"
                    className="px-5 py-3 text-sm md:text-base bg-gray-900 text-[#EA4242] flex items-center rounded-full text-center" >
                Visit Zire on YouTube
                </Link>
            </div>
        </header> 
    )
       
}

export default Header