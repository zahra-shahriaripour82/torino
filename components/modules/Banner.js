import Image from "next/image";
import Baner from "@/public/Images/Baner.png";

function Banner() {
  return (
  
    <Image src={Baner} width={1440} height={350} alt="Banner-page" />
  
  )
}

export default Banner