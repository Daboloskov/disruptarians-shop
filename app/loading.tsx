import Image from 'next/image';
import loader from '@/assets/loader.gif'

const Loading = () => {
    return ( <div className='h-screen flex items-center justify-center'>
        <Image src={loader} height={150} width={150} alt='Loading...' unoptimized />
    </div> );
}
 
export default Loading;
