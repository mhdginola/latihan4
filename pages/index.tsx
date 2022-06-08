// import EyeN3 from '../masok/Component/EyeN3/EyeN3';
import SlideContent from '../masok/Component/SlideContent/SlideContent';
import ContactUsForm4 from '../masok/Container/ContactUsForm4/ContactUsForm4';
import Layout1 from '../masok/Layout/Layout1/Layout1';
// import BestProduct from '../masok/Container/BestProduct/BestProduct';

export default function Home(){  
  return (
    <Layout1 pageTitle='SMART LIVING'>      
      {/* <EyeN3/> */}
      <SlideContent/>
      {/* <BestProduct/> */}
      <ContactUsForm4/>            
    </Layout1>
  )
}