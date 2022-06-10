import { ReactNode } from "react";
import Footer from "../../Component/Footer/Footer";
import Head from 'next/head';
import Header2 from "../../Component/Header2/Header2";

interface LayoutProps{
    children:ReactNode;
    pageTitle:string;
}

export default function Layout1(props:LayoutProps) {
    const {children, pageTitle} =props;    
    return(
        <div>
            <Head>               
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <meta name="description" content="The preferred smart home solution in Indonesia, a smarter way of living. Providing security and comfort to your home with technology such as Deon Smart Camera and Deon Smart Bulb"/>                  
                <meta name="google-site-verification" content="6jWW6TQNWYBtpeObeyqARhGPSNsUFg0nmXvbdVK3qkc" />
                <meta name="author" content="Deon"/>
                <title>DEON | {pageTitle}</title>
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