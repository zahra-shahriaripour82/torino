import Layout from "@/components/layout/Layout";
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import TanstackQueryProvider from "@/components/provider/TanstakQueryProvider";
import "@/styles/globals.css";


// import localFont from 'next/font/local'
// import Yekan from "@/public/fonts/YekanBakh-Regular.woff2";
//  const myFont = localFont({ src:
//       Yekan
//   //  "@/public/fonts/YekanBakh-Regular.woff2",
  
 
//  })
export default function App({ Component, pageProps }) {
  // const [isOpen,setIsOpen]=useState(false)

  return(

  // <main >

<TanstackQueryProvider>
   <Layout >
<Toaster/>
    <Component {...pageProps} />
  </Layout>
</TanstackQueryProvider>
  // </main>
  )


  
}
