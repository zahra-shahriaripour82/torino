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
function SelectOption({setSelectCity}) {
  
   const optionHandler=(e)=>{
setSelectCity(e.target.value)
   }
    
  return (
<div className={styles.container}>
  <div  className={styles.title}>
    <p>پرتردد</p>
  
  </div>
  {originCity.map(city=>(
   
    <option key={city.id} onClick={optionHandler} value={city.name}>
     
    {city.name }</option>))}
{

/* <option>تهران</option>
<option>سنندج</option>
<option>اصفهان</option> */}
</div>
  )
}

export default SelectOption




// export async function getStatic