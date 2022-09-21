import React, { useState, useEffect } from "react"
import axios from "axios"
import 'tailwindcss/tailwind.css'
import Image from 'next/image'
import bg from '../../public/images/bgdua.jpg'
import Link from 'next/link'

export default function MenuLanding() {
    const [productSatu, setProductSatu] = useState([])
    const [productDua, setProductDua] = useState([])
    const [productTiga, setProductTiga] = useState([])
    const [productEmpat, setProductEmpat] = useState([])
    const [productLima, setProductLima] = useState([])
    const [productEnam, setProductEnam] = useState([])

    async function getDataProduct() {
        try {
            // const getToken = localStorage.getItem("tokenCustomer")
            // const decode = jwt_decode(getToken)
            // console.log(getToken)
            await axios.get('https://ordercoffee-app.herokuapp.com/menu', {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => {
                console.log(res.data, 'ini res get api')
                setProductSatu(res.data.items[2])
                setProductDua(res.data.items[4])
                setProductTiga(res.data.items[5])
                setProductEmpat(res.data.items[3])
                setProductLima(res.data.items[6])
                setProductEnam(res.data.items[5])
            })
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        getDataProduct()
    }, [])
    return (
        <div>
            <Image src={bg} layout="fill" priority={true} className="filter: blur-xl" />
        </div>
    )
}