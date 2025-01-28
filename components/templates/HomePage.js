import BoxInfo from "../modules/BoxInfo";
import Cards from "../modules/CardsPage";
import Select from "../modules/Select"
import Banner from "@/components/modules/Banner";
import SelectOption from "../modules/SelectOption";

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