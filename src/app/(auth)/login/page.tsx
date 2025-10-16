import Image from 'next/image';
import { FormLogin } from '../../../components/forms/form-login';

export default function page() {
    return (
        <div className='  w-full  xl:w-1/3 flex flex-col justify-center  gap-3  '>
            <div className='w-full flex justify-center'>
                <Image src={"/gym.png"} alt='logo-gym' width={190} height={190}></Image>

            </div>
            <FormLogin></FormLogin>

        </div>
    )
}
