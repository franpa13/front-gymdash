"use client"

import Image from 'next/image';
import { FormLogin } from '../../../components/forms/form-login';
import { useEffect } from 'react';
import api from '@/api/default.api';
import axios from 'axios';

export default function page() {
    useEffect(() => {
        const prueba = async () => {
            const response = await axios.get("http://localhost:3000/api/articles")
            console.log(response, "response");

        }
        prueba()
    }, []);
    return (
        <div className='  w-full  xl:w-1/3 flex flex-col justify-center  gap-3  '>
            <div className='w-full flex justify-center'>
                <Image src={"/gym.png"} alt='logo-gym' width={190} height={190}></Image>

            </div>
            <FormLogin></FormLogin>

        </div>
    )
}
