// import { useEffect,useState } from 'react';


import Location from "@/public/icons/Location"
import styles from "./Select.module.css"
import Global from "@/public/icons/Global"
import Calender from "@/public/icons/Calender"
import SelectOption from "./SelectOption"


function Select() {
  // const [cityName,setCityName]=useState()
  // useEffect(()=>{
  //     fetch("http://localhost:6500/tour").then(res=>res.json())
  //     .then( data=>setCityName(data))
  // },[])
  // const city=[...cityName]
  // console.log(city);



  const proviceHandler =()=>{
    console.log("handel");
    <SelectOption/>
  }
  return (
    <div className={styles.container}>
      <h1><span>تورینو</span> برگزار کننده بهترین تور های داخلی و خارجی </h1>
      <div className={styles.selectionBar}>

        <div className={styles.provice}  onClick={proviceHandler}>
       
         <Location/>
          <p >مبدا</p>
        </div>
        <div className={styles.destenation}>
        
           <Global/>
            <p >مقصد</p>
        </div>
        <div className={styles.calender}>
        
        <Calender/>
        <p>تاریخ</p>
        </div>
      <div className={styles.button}>
        <button>جستجو</button>
      </div>
      </div>
    </div>
  )
}

export default Select