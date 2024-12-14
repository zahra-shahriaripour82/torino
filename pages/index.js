;

import AuthForm from "@/components/modules/AuthForm";
import HomePage from "@/components/templates/HomePage";
import ModalContainer from "@/core/container/ModalContainer";



;

export default function Home() {
  // const [isOpen,setIsOpen]=useState(false)

  return (
    <>
    <HomePage/>
    {/* <AuthForm/> */}
    <AuthForm />
    <ModalContainer/>
    </>
  );
}

