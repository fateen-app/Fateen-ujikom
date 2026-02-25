"use client"

import BarangCard from "@/components/barang"
import Header from "@/components/header"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Drawer, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer"
import React from "react"
import daftarbarang from "@/data/daftarBarang.json"
import { ShoppingBag } from "lucide-react"
import Diskon from "@/components/diskon"
import { numberToIDR } from "@/hook/numberToIDR"
import { Input } from "@/components/ui/input"

const PageHome =()=>{    
    
const daftarHero =['/banner/1.jpeg']
   const data = daftarbarang
   

    const [Keranjang,setKeranjang] = React.useState([])
    const [diskon,setDiskon] =React.useState(20)

    const [program,setProgram] = React.useState({
        'diskon' : diskon,
        'potongHarga' :0,
        'totalHarga':0,
        'cekoutPrice':0
    })
   

   const handleKeranjang =(item)=>{
        setKeranjang([...Keranjang,item])    
    }

  return(
        <div>
<section className="fixed bottom-10 right-10">
    <Drawer >
            <DrawerTrigger>
                <Button>
                    <ShoppingBag/>
                    {Keranjang?.length}
                </Button>
            </DrawerTrigger>
                <DrawerContent>
                     <DrawerHeader >
                        <DrawerTitle>
                            KERANJANG
                        </DrawerTitle>
                    </DrawerHeader>
                    <ScrollArea className="h-[30vh] w-full">
                        {
                            Keranjang.map((item,i)=>{
                                return(
                                    <div key={i} className="flex justify-between gap-8 p-4 ">
                                        <span>
                                            {item.title}
                                        </span>
                                        <span>
                                            {numberToIDR(item.price)}
                                            </span>
                                    </div>
                                )
                            })
                          }  
                          <Input placeHolder="Masukan Diskon (%)" onChange = {(event)=> setDiskon(event.target.value)} >
                        </Input>
                        <div className="w-full px-8 mt-4"> 
                                <Diskon diskon={diskon} harga={Keranjang.reduce((acc, data) => (acc + data.price), 0)} />
                        </div>
                    </ScrollArea>
                    <DrawerFooter>

                    </DrawerFooter>
               </DrawerContent>
         </Drawer>
</section>
         
         <div>
            <Header to ="/base" cta ="basic"/>
         </div>

      
          <Carousel>
                <CarouselContent>
                    {daftarHero.map ((item,i)=>{
                        return(
                             <CarouselItem>
                                <img src= {item} alt="gamba1" className="w-full h-screen object-cover" />
                                </CarouselItem>
                        )
                    })}
                </CarouselContent>
            </Carousel>
           <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            
            {
                data?.map((item,i)=>{
                    return(
                        <div key={i} onClick={()=>handleKeranjang(item)}>
                       <BarangCard  barang={item}/>
                
                        </div>
                    )
                })
            }
           </div>
          
        </div>
         

        
    )
}

export default PageHome ;