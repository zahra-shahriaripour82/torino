import Image from "next/image"
import styles from "./Card.module.css"
import { convertToPersienDate, day, getDay } from "@/utils/LocalDate"

function Card(props) {

   const {
    price,
   
startDate,
endDate,
fleetVehicle,
    title,
    options,
    image}=props
    
   
    
    
  return (
    <div className={styles.container}>
<Image src={image} alt="tour-picture" width={278.44} height={159}/>
<div className={styles.description}>
    <h2>{title}</h2>

    <p>{`${convertToPersienDate(startDate)}ماه.
   ${getDay(startDate,endDate)} روزه-
    ${fleetVehicle}-
${options[1]}

    `}</p>
    <div className={styles.button}>
<button>رزرو</button>
<div>

<span>{price}</span><p>تومان</p>
</div>
    </div>
</div>
    </div>
  )
}

export default Card