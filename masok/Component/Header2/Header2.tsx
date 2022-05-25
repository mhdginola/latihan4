import st from './Header2.module.css';
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';

export default function Header2(){          
    const [statg, setStatg] = useState(false);
    
    const icgBars= '/images/bars.svg';
    const icgTimes= '/images/times.svg';

    const handleClick=()=>{        
        setStatg(!statg);
    }    

    const handleClick2=()=>{          
        setStatg(!statg);                       
    }    
        return(          
            <nav className={st.navbarItem}>
                <div className={"logo"}>
                    <Link href="/"><a>                        
                            <div className={'image-container'}>
                            <Image 
                                src="/images/logo.png"  
                                layout="fill" 
                                objectFit="contain" 
                                className={'image'} 
                                alt="DEON" 
                                priority/>
                            </div></a>
                    </Link>
                </div>             
                <ul className={statg===false?st.navMenu : st.navMenu+' '+ st.active}>                
                    <li onClick={handleClick2}><Link href="/product/security"><a>SECURITY</a></Link></li>
                    <li onClick={handleClick2}><Link href="/product/smart_home"><a>SMART HOME</a></Link></li>
                    <li onClick={handleClick2}><Link href="/product/lighting"><a>LIGHTING</a></Link></li>                    
                    <li onClick={handleClick2}><Link href="/product/electrical"><a>ELECTRICAL</a></Link></li> 
                    <li className={st.ictg}><Image src={"/images/instagram.svg"} width={20} height={20} alt={"instagram"} priority/></li>  
                    <li className={st.ictg}><Image src={"/images/tiktok.svg"} width={20} height={20} alt={"tiktok"} priority/></li>
                    <li className={st.ictg}><Image src={"/images/youtube.svg"} width={20} height={20} alt={"youtube"} priority/></li>                    
                </ul>            
                <div className={st.menuIcon} onClick={handleClick}>                                        
                    <Image src={statg===false?icgBars:icgTimes} width={20} height={20} alt={"menu"} priority/>                    
                </div>

            </nav>
        )    
}