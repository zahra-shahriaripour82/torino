import { useGetToursData } from "@/core/services/queries"
import Card from "./Card"
import styles from "./CardsPage.module.css"

function CardsPage() {
  const {data}=useGetToursData();
// console.log(data?.data);

 

  return (
   

    <div className={styles.container}>
      <div className={styles.tours}>
      <p>همه تورها</p>
      </div>
  <div className={styles.cards}>
{data?.data.map(tour=>(

<Card key={tour.id} {...tour}/>
))}
  </div>
  <div>

  </div>
    </div>
  
  )
}

export default CardsPage


// export async function getServerSideProps(){
// 
// return { props: { data } }
// }