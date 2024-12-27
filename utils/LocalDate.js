
const convertToPersienDate=(date)=>{
    
    const persianDate = new Date(date).toLocaleDateString('fa-IR-u-nu-latn',{ month: 'long' });


    return  persianDate

}

//یه بار دیگه اینو چک کنم 
const getDay =(date1,date2)=>{
const  dayStart =  new Date(date2).getDay();
const dayEnd= new Date(date1).getDay();
const during=(Number(dayStart)-(-Number(dayEnd)).toString());
return during




}

console.log(getDay("2024-12-10T00:00:00.000Z","2024-12-15T00:00:00.000Z"));


export {convertToPersienDate,getDay}
