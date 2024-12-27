import { useState } from "react"
import toast from "react-hot-toast";
import OtpInput from 'react18-input-otp';

import styles from "./AuthForm.module.css"
import Close from "@/public/icons/Close"
import { isValidMobile } from "@/utils/validation";
import { useSendOtp,useCheckOtp } from "@/core/services/mutation";
import ModalContainer from "@/core/container/ModalContainer";
import Form from "../layout/form"
import { setCookie } from "@/utils/cookie";
import Back from "@/public/icons/Back";
import Login from "../layout/Login";
import { useGetUserData } from "@/core/services/queries";

function AuthForm() {

    const [step,setStep]=useState(1);
    const [mobile,setMobile]=useState("");
    const [isOpen,setIsOpen]=useState(false)
    const {data}=useGetUserData();

  console.log(data?.data.mobile);
  if(data?.data) return <Login  mobile={data?.data.mobile}/>
  return (
    <div >

      {/* {!setCookie ?<Form setIsOpen={setIsOpen}  onClick={e=>setIsOpen(true)} /> :<Login mobile={mobile}/> } */}
<Form setIsOpen={setIsOpen}  onClick={e=>setIsOpen(true)} />
        {step === 1 && 
        <ModalContainer isOpen={isOpen} setIsOpen={setIsOpen}>

          <SendOtp mobile={mobile} setMobile={setMobile} setStep={setStep} setIsOpen={setIsOpen}
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

  function SendOtp({mobile,setMobile,setStep,setIsOpen}){
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
        onSuccess:  (data) => {
      
          
          toast.success(data?.data?.message);
          toast(data?.data?.code);
          setStep(2);
        
          
        },
        onError: (error) => {
          console.log(error);
       
        },
      }
    );
    // console.log(isValidMobile(mobile));
    
  }

    return(
      

      <div className={styles.container} >
        
        <div  className={styles.CloseBtn} onClick={e=>setIsOpen(false)}>

            <Close  />
        </div>
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





function CheckOtp({mobile,setStep,setIsOpen}){
  const [code,setCode]=useState("")
  
  const { isPending, mutate } = useCheckOtp();

  const CheckOtpHandler=(event)=>{
    
event.preventDefault();
if (isPending) return "loading"
if(!code)
  return  toast.error("کد نمی تواند خالی باشد")

   
 



    mutate(
      { mobile,code },
      {

        onSuccess:async (data) => {
          console.log(data);
          
          // setCookie("accessToken", data?.data?.accessToken, 30);
          // setCookie("refreshToken", data?.data?.refreshToken, 365);
          setIsOpen(false);
          setStep(1);
        },
        onError: (error) => {
          console.log(error);
          
       toast.error("کدوارد شده بدون اعتبارمی باشد")
        },
      }
    );
    
    
  }

  const changeHandler = (otp) => {
   
    setCode(otp);
  }
    return(
    

        <div className={styles.container} >
          <div className={styles.BackBtn}  onClick={e=>setStep(1)}>

           <Back  />
          </div>
           <h1 className={styles.title}>    کد تایید را وارد کنید     </h1>
           <form className={styles.form} onSubmit={CheckOtpHandler}>
            <label className={styles.label}>
             کد تایید به شماره موبایل  {mobile} ارسال شد
            </label>
           <div className={styles.OtpInput}>

            <OtpInput value={code} onChange={changeHandler} numInputs={6} separator={<span></span>}
               inputStyle={{
                border: "1px solid silver",
                borderRadius: "6px",
                width: "58px",
                height: "53px",
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