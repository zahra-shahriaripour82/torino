import Image from "next/image";

import styles from "./BoxInfo.module.css";
import carton from "@/public/Images/carton.png";
import Call from "@/public/icons/Call";
import Link from "next/link";

function BoxInfo() {
  return (
    <div className={styles.container}>
      <div className={styles.right}>
        <div>
          <h3>
            خرید تلفنی از <span>تورینو</span>
          </h3>
          <p>به هر کجا که میخواهید !</p>
        </div>

        <div className={styles.image}>
          <Image src={carton} />
        </div>
      </div>
      <div className={styles.left}>
        <p>
          021-1840 <Call />
        </p>

        <button>
          {/* <Link href={"/contact-us"}> */}
          اطلاعات بیشتر
          {/* </Link> */}
        </button>
      </div>
    </div>
  );
}

export default BoxInfo;
