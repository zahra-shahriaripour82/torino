import BoxInfo from "../modules/BoxInfo";
import Cards from "../modules/CardsPage";
import Select from "../modules/Select"
import Banner from "@/components/modules/Banner";

function HomePage() {
 
  return (
    <>
    <Banner/>
   <Select/>
   <Cards/>
   <BoxInfo/>
    </>
  )
}

export default HomePage