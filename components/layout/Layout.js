 import Image from "next/image"
import Link from "next/link"


import Logo from"@/public/Images/Logo.png";
// import frame from "@/public/Images/frame.png"
import aira from "@/public/Images/aira-.png"
import samandehi from "@/public/Images/samandehi-.png"
import ecunion from "@/public/Images/ecunion-3.png"
import passenger from "@/public/Images/passenger.png"
import airlan from "@/public/Images/airlan.png"
import Heart from "@/public/icons/Heart";
import Group from "@/public/icons/Group";
import Message from "@/public/icons/Message";

import styles from "./Layout.module.css"

import Form from "./form.js"
import AuthForm from "../modules/AuthForm";


function Layout({children}) {
  // const [isOpen,setIsOpen]=useState(false)


 

  return (
    <>
<header className={styles.header} >
 

<div className={styles.logo}>
<Image src={Logo} width={146}  alt="torino-logo"  />
</div>
<div className={styles.items}>
    <ul>
       <Link href={"/"}>
       <li>صفحه اصلی</li>
       </Link>
       <Link href={"/"}>
        <li>خدمات گردشگری</li>
       
       </Link>
       <Link href={"/"}>
        <li>درباه ما </li>
   
      </Link>
      <Link href={"/"}>
      
        <li>تماس با ما</li>
      </Link>
    </ul>
</div>
<AuthForm/>
{/* <Form/> */}
{/* <div className={styles.profile}>
}
  <div className={styles.login} onClick={LoginHandler}>
<Image src={frame}/>

    <p >
    ورود
    </p>
  </div>

    <span>|</span>
    <p onClick={RegisterHandler}>ثبت نام </p>
</div> */}
   
</header>

 <div className={styles.children}>{children}</div>

<footer className={styles.footer}>
  <div className={styles.container}>
    <div className={styles.Group}>
      <Group/>
      <div>
      <h4>بصرفه ترین قیمت</h4>
      <p>بصرفه ترین و ارزان ترین قیمت تور را از ما بخواهید.</p>
    </div>
      </div>
      <div className={styles.Message}>
      <Message/>
      <div>
      <h4>  پشتیبانی</h4>
      <p>پشتیبانی و همراهی 24 ساعته در تمامی مراحل سفر شما.</p>
    </div>
      </div>
      <div className={styles.Message}>
      <Heart/>
      <div>
      <h4>رضایت کاربران  </h4>
      <p>رضایت بیش از 10هزار کاربر از تور های ما.</p>
    </div>
      </div>
  </div>
  <div className={styles.details}>
    <div className={styles.right}>
      <div className={styles.torino}>

<h4>تورینو</h4>
<Link href={"/"}>
<li>درباره ما</li>
</Link>
<Link href={"/"}>
<li>تماس با ما </li>
</Link>
<Link href={"/"}>
<li> چرا تورینو </li>
</Link>
<Link href={"/"}>
<li> بیمه مسافرتی </li>
</Link>
      </div>
   
<div className={styles.services}>

    <h4>
      خدمات مشتریان
      </h4>
      <Link href={"/"}>
<li> پشتیبانی آنلاین</li>
</Link>
<Link href={"/"}>
<li>  راهنمای خرید</li>
</Link>
<Link href={"/"}>
<li>  راهنمای استرداد</li>
</Link>
<Link href={"/"}>
<li>  پرسش و پاسخ</li>
</Link>
</div>


    <div className={styles.left}>
 <div className={styles.connection}>
<Image src={Logo} width={146} height={140} alt="torino-logo"/>
<p>تلفن پشتیبانی:021-8574</p>
 </div>
 <div className={styles.symbols}>
<Image src={airlan} width={78} height={74} alt="airlan-sign"/>
<Image src={passenger} width={71} height={74} alt="passnger-sign"/>
<Image src={ecunion} width={68} height={74} alt="ecuni-sign"/>
<Image src={samandehi}  width={67} height={74} alt="smandehi-sign"/>
<Image src={aira} width={68} height={74} alt="airlan-sign"/>
 </div>
    </div>

  </div>
  </div>
</footer>
    </>
  )
}

export default Layout