// import { useEffect,useState } from 'react';

import Location from "@/public/icons/Location";
import styles from "./Select.module.css";
import Global from "@/public/icons/Global";
import Calender from "@/public/icons/Calender";
import SelectOption, { Destenation } from "./SelectOption";
import { useState } from "react";
import { useForm } from "react-hook-form";



import DatePicker from "react-multi-date-picker"
function Select() {
  // const [cityName,setCityName]=useState()
  // useEffect(()=>{
  //     fetch("http://localhost:6500/tour").then(res=>res.json())
  //     .then( data=>setCityName(data))
  // },[])
  // const city=[...cityName]
  // console.log(city);
  const [selectCity, setSelectCity] = useState("مبدا");
  const [selectDestenationCity, setSelectDestenationCity] = useState("مقصد");
  const [show, setShow] = useState(false);
  const [showDes, setShowDes] = useState(false);
  const [openCalender, setOpenCalender] = useState(false);
  const { register, handleSubmit } = useForm();


  const [value, setValue] = useState(new Date()); 

  const proviceHandler = () => {
    setShow(!show);
  };

  const destenationHandler = () => {
    setShowDes(!showDes);
  };

  const submitHandler = (data) => {
    console.log(data);
  };
  const CalenderHandler = () => {
    setOpenCalender(!openCalender);
  };
  return (
    <>
      <div className={styles.container}>
        <h1>
          <span>تورینو</span> برگزار کننده بهترین تور های داخلی و خارجی{" "}
        </h1>
        {/* <div className={styles.selectionBar}> */}

        <form
          className={styles.selectionBar}
          onSubmit={handleSubmit(submitHandler)}
        >
          <div className={styles.provice} onClick={proviceHandler}>
            <Location />
            <p {...register("originId")}>{selectCity}</p>
            <div></div>
          </div>

          <div className={styles.destenation} onClick={destenationHandler}>
            <Global />
            <p {...register("destinationId")}>{selectDestenationCity}</p>
          </div>
          <div className={styles.calender} onClick={CalenderHandler}>
            {/* <Calender />
            <p>تاریخ</p> */}
     {/* <DatePicker value={value} onChange={setValue} />; */}
          </div>

          <div className={styles.button}>
            <button type="submit">جستجو</button>
          </div>
        </form>
      </div>
      {/* {openCalender && <CalenderP />} */}
      {show && <SelectOption setSelectCity={setSelectCity} />}
      {showDes && (
        <Destenation setSelectDestenationCity={setSelectDestenationCity} />
      )}
    </>
  );
}

export default Select;
