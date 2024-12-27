
import Image from "next/image";


import frame from "@/public/Images/frame.png"


import styles from "./form.module.css"
function Form({setIsOpen}) {
 
  
    const LoginHandler=()=>{
      console.log("zahra");

    }
    const RegisterHandler=()=>{
    setIsOpen(true)
      
  {/* <AuthForm isOpen={isOpen} setIsOpen={setIsOpen}/> */}
  
  // setIsOpen(true)
    }
  return (
    <div className={styles.profile}>
<div className={styles.login} onClick={LoginHandler}>
<Image src={frame} alt="user-icon"/>

    <p >
    ورود
    </p>
  </div>
<span>|</span>
<p onClick={RegisterHandler}>ثبت نام </p>
    </div>
  )
}

export default Form

//  export default function (){

// }