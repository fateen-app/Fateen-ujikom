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
    //const [data,setData] = React.useState([])
const daftarHero =['/banner/1.jpeg']
   const data = daftarbarang
   

    const [Keranjang,setKeranjang] = React.useState([])
    const [diskon,setDiskon] =React.useState(20)

    // state program diskon
    //     React.useEffect(()=>{
    //         setTotalHarga(Keranjang.reduce((acc,data)=>(acc+=data.price),0))
    //         setPotonganHarga(totalHarga*diskon/100)
    //         setCekoutPrice(totalHarga-potonganHarga)
    //     },
    // [diskon,potonganHarga,totalHarga,Keranjang])

    const [program,setProgram] = React.useState({
        'diskon' : diskon,
        'potongHarga' :0,
        'totalHarga':0,
        'cekoutPrice':0
    })
    // efek yang akan terjadi jika keranjang berubah
    // use effect untuk program
 
   

   const handleKeranjang =(item)=>{
        setKeranjang([...Keranjang,item])    
    }

  return(
        <div>
<section className="fixed bottom-10 right-10">
    <Drawer>
            <DrawerTrigger>
                <Button>
                    <ShoppingBag/>
                    {Keranjang?.length}
                </Button>
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
                    </ScrollArea>
                    <DrawerFooter>
                      <Input   placeHolder ="masukan diskon" onChange = {(e)=>setDiskon(e.target.value)}/>
                      
                        <Diskon diskon ={diskon} harga ={Keranjang.reduce((acc,data)=>(acc+=data.price),0)}>

                        </Diskon>
                    </DrawerFooter>
               </DrawerContent>
            </DrawerTrigger>
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