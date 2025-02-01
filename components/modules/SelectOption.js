const originCity=[ 
  {name :"تهران",
    id:1,
  },
  {name :"سنندج",
    id:2,
  },
  {name :"اصفهان",
    id:3,
  }
]

const DestenationCity=[
  {
    name:"سنندج",
    id:"1"
  }
]





import { useGetToursData } from "@/core/services/queries";
import styles from "./SelectOption.module.css"
import Location from "@/public/icons/Location";
function SelectOption({setSelectCity}) {
  
  // const {data}=useGetToursData();

  
   const optionHandler=(e)=>{
setSelectCity(e.target.value)
   }
    
  return (
<div className={styles.container}>
  <div  className={styles.title}>
    <p>پرتردد</p>
  
  </div>
  {originCity.map(city=>(
   
    <option key={city.id} onClick={optionHandler} value={city.name} className={styles.opton}>
    {city.name}
    
    </option>))}
</div>
  )
}

export default SelectOption






function Destenation({setSelectDestenationCity}) {
  const {data}=useGetToursData();
  // console.log(data);
  const optionHandler=(e)=>{
    setSelectDestenationCity(e.target.value)
       }
  return (
    <div className={styles.containerDes}>
    <div  className={styles.titleDes}>
      <p>پرتردد</p>
    
    </div>
    {data?.data.map(tour=>(
     
      <option key={tour.destination.id} onClick={optionHandler} value={tour.destination.name} className={styles.optonDes}>
       <Location/>
      {tour.destination.name}
      
      </option>))}
      
  </div>
  )
}

export  {Destenation};

// export async function getStatic



























































// import { useGetToursData } from '@/core/services/queries'
// import { useState } from 'react';


// function SelectOption() {
//   const [cityName,setCityName]=useState()
//   // let origin=[]
//   const {data}=useGetToursData();
// const uniqeCity=new Set(cityName)
//   return (
//     <div>

//       <select>
//       {data?.data.map(tour=>
//     //  {const cityName=tour.origin.name}
 
//           <option key={tour.id} value={tour.origin.id}>
             
//            {uniqeCity}
//           </option>
//          )}
//          </select>
//     </div>
//   )
// }

// export default SelectOption


