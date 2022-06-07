// import EyeN3 from '../masok/Component/EyeN3/EyeN3';
import SlideContent from '../masok/Component/SlideContent/SlideContent';
import ContactUsForm from '../masok/Container/ContactUsForm/ContactUsForm';
import Layout1 from '../masok/Layout/Layout1/Layout1';
// import BestProduct from '../masok/Container/BestProduct/BestProduct';

export default function Home(){  
  return (
    <Layout1>      
      {/* <EyeN3/> */}
      <SlideContent/>
      {/* <BestProduct/> */}
      <ContactUsForm/>            
    </Layout1>
  )
}