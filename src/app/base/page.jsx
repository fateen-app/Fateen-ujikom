"use client"
 import React from 'react'
 import { useState } from 'react'
import { Input } from '@/components/ui/input'
import Diskon from '@/components/diskon'
import Header from '@/components/header'

    const PageBaseApp = () => {
        const [diskon, setDiskon] = useState()
        const [harga, setHarga] = useState()
        return (
        <div>
            <Header to="/" cta="Toko saya"/>

        <div>

                <Input placeholder={"Harga Barang"} onChange ={(e)=>setHarga (e.target.value)} />

        </div>

        <div>

                <Input placeholder={"Diskon Barang"} onChange ={(e)=>setDiskon (e.target.value)} />

    </div>

                <Diskon diskon={diskon} harga={harga}/>


    </div>

    )

    }
export default PageBaseApp