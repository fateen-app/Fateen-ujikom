import React from 'react'
import { Button } from './ui/button'
import { Card, CardContent, CardFooter, CardHeader } from './ui/card'
import { Badge } from './ui/badge'
import { numberToIDR } from '@/hook/numberToIDR'

const BarangCard = (props) => {
  return (
   <Card className={'h-full'}> 
      <CardHeader>
     <img className='w-full rounded-2xl bg-white min-h max-h-80 object-cover object-top'
     src={props.barang?.image} alt={`gambar$({props.barang.title})`}/>
        </CardHeader>  
        <CardContent>
            <p className={"h-full"}>
          <Badge>
        {props.barang?.category}
          </Badge>
      <h1 className='text-lg font-bold'> 
       {props.barang?.title}
      </h1>
      <p className='text-black/80'>
        {props.barang?.description}
      </p>
        </p>
        </CardContent>
        <CardFooter className={'flex justify-between'} >
       
        <span className='text-4xl text-red-600'>           
            {numberToIDR(props.barang?.price)}
        </span>
            <div>
                <Button className="bg-black" onClick={props.onClick}> 
                   Add to Cart
                </Button>
            </div>
        
        </CardFooter>
      {/* <pre>
        <code>
            {JSON.stringify(props.barang,0,2)}
        </code>
      </pre> */}
    </Card> 
  )
}

export default BarangCard
    

// display
// 1.block
// 2.inline
// 3.inline - block
// 4.flexbok => flex
// 5.cla