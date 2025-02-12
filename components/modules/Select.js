// import { useEffect,useState } from 'react';

import Location from "@/public/icons/Location";
import styles from "./Select.module.css";
import Global from "@/public/icons/Global";
import Calender from "@/public/icons/Calender";
import SelectOption, { Destenation } from "./SelectOption";
import { useState } from "react";
import { useForm } from "react-hook-form";

import DatePicker from "react-multi-date-picker";
import persian_fa from "react-date-object/locales/persian_fa";
import persian from "react-date-object/calendars/persian";
import InputIcon from "react-multi-date-picker/components/input_icon";
import "react-multi-date-picker/styles/colors/green.css";
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
        <h1 >
          <span className={styles.titleTorino}>تورینو</span> برگزار کننده بهترین تور های داخلی و خارجی{" "}
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
          {/* onClick={CalenderHandler} */}
          <div className={styles.calendar} >
            {/* <Calender /> */}
            {/* <p>تاریخ</p> */}

            <DatePicker
              value={value}
              onChange={setValue}
              render={<InputIcon />}
              calendar={persian}
              locale={persian_fa}
              range
              rangeHover
              className="green"

              style={{
            
                height: "24px",
                borderRadius: "12px",
                fontSize: "26px",
                padding: "3px 10px"
              }}
            />
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
