import Image from "next/image";

import frame from "@/public/Images/frame.png";
import profile from "@/public/Images/profile.png";
import arrow from "@/public/Images/arrow-down.png";
import Frame2 from "@/public/icons/frame2";
import styles from "./Login.module.css";
import Link from "next/link";
import { useState } from "react";
import Profile from "@/public/icons/Profile";
import LogOut from "@/public/icons/LogOut";
function Login({ mobile }) {
  const [open, setOpen] = useState(false);
  console.log(open);

  console.log(mobile);
  const opneMenuHandler = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className={styles.container} onClick={opneMenuHandler}>
        <Image src={frame} alt="user-icon" />
        <p>{mobile}</p>
        <Image src={arrow} />
        {open && <Menu mobile={mobile} />}
      </div>

      {/* <Menu/> */}
    </>
  );
}

export default Login;

function Menu({ mobile }) {
  return (
    <div className={styles.menu}>
      <div className={styles.mobile}>
        <div className={styles.frame2}>
          <Frame2 />
          {/* <Image src={profile} alt="user-icon" width={11} height={11}/> */}
        </div>
        <div className={styles.phone}>
          <Link href={"/"}>{mobile}</Link>
        </div>
      </div>
      <div className={styles.userInfo}>
        <div className={styles.profile}>
          <Profile />
          <Link href={"/profile"}>اطلاعات حساب کاربری</Link>
        </div>

        {/* <Image src={frame} alt="user-icon"/> */}
      </div>
      <div className={styles.Exit}>
        <LogOut />
        {/* <Image src={frame} alt="user-icon"/> */}
        <Link href={"/"}>خروج از حساب کاربری</Link>
      </div>
    </div>
  );
}
