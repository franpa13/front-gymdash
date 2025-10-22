

import Image from 'next/image';
import { FormLogin } from '../../../components/forms/form-login';
import { Card, CardContent } from '@/components/ui/card';


export default function page() {

    return (
        <div className='  w-full  xl:w-1/3 flex flex-col justify-center  gap-3  '>
            <Card className='shadow-2xl'>
                <CardContent>

                    <div className='w-full flex justify-center'>
                        <Image src={"/gym.png"} alt='logo-gym' width={190} height={190}></Image>

                    </div>

                    <FormLogin></FormLogin>
                </CardContent>


            </Card>




        </div>
    )
}
