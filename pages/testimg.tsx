import Image from 'next/image';
import EyeN3 from '../masok/Component/EyeN3/EyeN3';
import ContactUsForm from '../masok/Container/ContactUsForm/ContactUsForm';
import Layout1 from '../masok/Layout/Layout1/Layout1';

export default function Home(){
  return (
    <Image 
    src='/images/1.png'
    width={1000} 
    height={1000} 
    layout='responsive' 
    alt='ITEM'
    quality={50}                             
    />
  )
}