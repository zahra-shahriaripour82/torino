import { useState } from "react"
import toast from "react-hot-toast";
import OtpInput from 'react18-input-otp';

import styles from "./AuthForm.module.css"
import Add from "@/public/icons/Add"
import { isValidMobile } from "@/utils/validation";
import { useSendOtp } from "@/core/services/mutation";
import ModalContainer from "@/core/container/ModalContainer";
import Form from "../layout/form"

function AuthForm() {

    const [step,setStep]=useState(1);
    const [mobile,setMobile]=useState("");
    const [isOpen,setIsOpen]=useState(false)
  return (
    <div >
<Form setIsOpen={setIsOpen} isOpen={isOpen}/>
        {step === 1 && 
        <ModalContainer isOpen={isOpen} setIsOpen={setIsOpen}>

          <SendOtp mobile={mobile} setMobile={setMobile} setStep={setStep}
          />
        </ModalContainer>
        
        }

        {step === 2 && 
        <ModalContainer isOpen={isOpen} setIsOpen={setIsOpen}>

          <CheckOtp mobile={mobile} setStep={setStep}  setIsOpen={setIsOpen}/>
        </ModalContainer>
        
        }
    </div>
  )
}

export default AuthForm

  function SendOtp({mobile,setMobile,setStep}){
  const [error,setError]= useState("");
  console.log(error);
  
  const {isPending,mutate}=useSendOtp();
  const SendOtpHandler=(event)=>{
    event.preventDefault();
    if(isPending) return;
   
    
    if(!isValidMobile(mobile)) return setError("لطفا شماره معتبر وارد کنید!")
      setError("")

    mutate(
      { mobile },
      {
        onSuccess: (data) => {
      
          
          toast.success(data?.data?.message);
          toast(data?.data?.code);
          setStep(2);
         
          
        },
        onError: (error) => {
          console.log(error);
       
        },
      }
    );
    console.log(isValidMobile(mobile),error);
    
  }

    return(
      

        <div className={styles.container} >
           <Add  />
           <h1>ورود به تورینو</h1>
           <form className={styles.form}onSubmit={SendOtpHandler}>
            <label>
            {!! error? <p className={styles.error}>{error}</p> : <p>شماره خود را وارد کنید </p> }
            </label>
            <input type="text"
             placeholder="0912***4253"
             value={mobile}
            onChange={(e) => setMobile(e.target.value)}
        className={!!error && styles.error1}
            />
            
            
            <button type="submit">ارسال کد تایید</button>
           
            
           </form>
           
        </div>
    
    )
}





function CheckOtp({mobile,setStep}){
  const [code,setCode]=useState("")

  
  // const {isPending,mutate}=useSendOtp();
  const CheckOtpHandler=(event)=>{
    // event.preventDefault();
    // if(isPending) return;
   
    
    // if(!isValidMobile(mobile)) return setError("لطفا شماره معتبر وارد کنید!")
    //   setError("")

    mutate(
      { mobile,code },
      {
        onSuccess: (data) => {
      
          
          toast.success(data?.data?.message);
        
        },
        onError: (error) => {
          console.log(error);
       
        },
      }
    );
    console.log(isValidMobile(mobile),error);
    
  }

  const changeHandler = (otp) => {
    setCode(otp);
  }
    return(
    

        <div className={styles.container} >
           <Add  />
           <h1>    کد تایید را وارد کنید     </h1>
           <form className={styles.form}onSubmit={CheckOtpHandler}>
            <label>
             کد تایید به شماره موبایل  {mobile} ارسال شد
            </label>
           <div className={styles.OtpInput}>

            <OtpInput value={code} onChange={changeHandler} numInputs={6} separator={<span></span>}
               inputStyle={{
                border: "1px solid silver",
                borderRadius: "5px",
                width: "49px",
                height: "45px",
                marginRight: "5px",
              }}
            />
           </div>
            
            <button type="submit"> ورود به تورینو </button>
           
            
           </form>
           
        </div>
    
    )
}
export async function getStaticPaths () {
  return{
    paths:[],
    fallback:true
  }
}