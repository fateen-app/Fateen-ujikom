'use client'

import Tenn from "@/components/Tenn"
import Header from "@/components/header"

// page home adalah komponen
const PageHome = ()=>{
 
  return(
    <div className="flex flex-col gap">
      <Header ngaranWeb="fateen"/>
      <h1>Page Next JS</h1>
      <Tenn/>

    </div> 
  )


}

 
export default PageHome
   