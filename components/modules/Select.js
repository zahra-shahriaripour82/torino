// import { useEffect,useState } from 'react';


import Location from "@/public/icons/Location"
import styles from "./Select.module.css"
import Global from "@/public/icons/Global"
import Calender from "@/public/icons/Calender"
import SelectOption, { Destenation } from "./SelectOption"
import { useState } from "react"


function Select() {
  // const [cityName,setCityName]=useState()
  // useEffect(()=>{
  //     fetch("http://localhost:6500/tour").then(res=>res.json())
  //     .then( data=>setCityName(data))
  // },[])
  // const city=[...cityName]
  // console.log(city);
  const [selectCity,setSelectCity]=useState("مبدا")
  const [selectDestenationCity,setSelectDestenationCity]=useState("مقصد")
const [show,setShow]=useState(false)
const [showDes,setShowDes]=useState(false)
  const proviceHandler =()=>{
    setShow(!show)
  }


  const destenationHandler=()=>{
   setShowDes(!showDes)
  }
  return (
    <>
    <div className={styles.container}>
      <h1><span>تورینو</span> برگزار کننده بهترین تور های داخلی و خارجی </h1>
      <div className={styles.selectionBar}>

      
        <div className={styles.provice}  onClick={proviceHandler}>
       
         <Location/>
          <p >{selectCity}</p>
          <div>
          </div>
        </div>
       
        <div className={styles.destenation} onClick={destenationHandler}>
        
           <Global/>
            <p>{selectDestenationCity}</p>
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
    {show && <SelectOption setSelectCity={setSelectCity}/>}
    {showDes && <Destenation setSelectDestenationCity={setSelectDestenationCity}/>}
      </>
  )
}

export default Select