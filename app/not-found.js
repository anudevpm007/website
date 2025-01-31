import Link from "next/link"
import Image from "next/image"
import Menu from "./Components/Home/Menu"
import MainLogo from "@/public/image/NotFound/MainLogo.png"
import ErrorImage from "@/public/image/NotFound/ErrorImage.png"


export default function NotFound() {
  return (
    <div>
      <div>
        <Menu />
      </div>
      <div className=" flex justify-center">
        <Image src={ErrorImage} className="w-[40%] flex justify-center" alt="Main Logo" />
      </div>
    </div>
  )
}