import React from 'react'
import { Button } from './ui/button'
import { Card, CardContent, CardFooter, CardHeader } from './ui/card'
import { Badge } from './ui/badge'

const BarangCard = (props) => {
  return (
   <Card className={'h-full'}> 
      <CardHeader>
     <img className='w-full rounded-2xl bg-white min-h max-h-80 object-contain'
     src={props.barang?.image} alt={`gambar$({props.barang.title})`}/>
        </CardHeader>  
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
        <CardFooter className={'flex justify-between'} >
       
        <span className='text-4xl text-red-600'>           
            {props.barang?.price}
        </span>
            <div>
                <Button variant={'ghost'} onClick={props.onClick}> 
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