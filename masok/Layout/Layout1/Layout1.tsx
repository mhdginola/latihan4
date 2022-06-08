import { ReactNode } from "react";
import Footer from "../../Component/Footer/Footer";
import Head from 'next/head';
import Header2 from "../../Component/Header2/Header2";

interface LayoutProps{
    children:ReactNode;
}

export default function Layout1(props:LayoutProps) {
    const {children} =props;    
    return(
        <div>
            <Head>               
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <meta name="description" content="Web site created using create-react-app"/>  
                <meta name="google-site-verification" content="6jWW6TQNWYBtpeObeyqARhGPSNsUFg0nmXvbdVK3qkc" />
                <title>DEON | SMART LIVING</title>
                <link rel="icon" type="image/png" href='/LD3.svg'/>
                
            </Head>            
            <Header2/>                   
            <div>                
                {children}
            </div>                            
            <Footer/>                        
        </div>
    )
}