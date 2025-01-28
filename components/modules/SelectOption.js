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
     <Location/>
    {city.name}
    
    </option>))}


 {/* <option>تهران</option>
 <option>سنندج</option>
 <option>اصفهان</option>  */}
</div>
  )
}

export default SelectOption






function Destenation() {
  return (
   dd
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


