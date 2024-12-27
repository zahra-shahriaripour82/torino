import Image from "next/image"

import frame from "@/public/Images/frame.png"
import profile from "@/public/Images/profile.png"
import arrow from "@/public/Images/arrow-down.png"
import styles from "./Login.module.css"
import Link from "next/link";
import { useState } from "react";
function Login({mobile}) {
  const [open,setOpen]=useState(false)
  console.log(open);
  
console.log(mobile);
const opneMenuHandler=()=>{
  setOpen(!open)
  
 
}
  
  return (
    <>
  <div className={styles.container} onClick={opneMenuHandler}  >
  <Image src={frame} alt="user-icon" />
  <p>{mobile}</p>
  <Image src={arrow} />
  {open && <Menu mobile={mobile}/>}
  </div>

  {/* <Menu/> */}
  </>
  )
}

export default Login


function Menu ({mobile}){
 return (
  <div className={styles.menu}>

  <div >
   <Image src={profile} alt="user-icon" width={11} height={11}/>
    <Link href={"/"}>{mobile}</Link>
   </div>
   <div className={styles.userInfo}>
  <Image src={frame} alt="user-icon"/>
    <Link href={"/"}>اطلاعات حساب کاربری</Link>
   </div>
   <div className={styles.Exit}>
  <Image src={frame} alt="user-icon"/>
    <Link href={"/"}>خروج از حساب کاربری</Link>
   </div>
    </div>
 )

  
}