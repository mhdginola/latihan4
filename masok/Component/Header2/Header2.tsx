import st from './Header2.module.css';
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';

export default function Header2(){          
    const [statg, setStatg] = useState(false);
    
    const icgBars= '/images/bars.svg';
    const icgTimes= '/images/times.svg';
    const svgVb1= '0 0 448 512';
    const svgVb2= '0 0 352 512';
    const svgD1= 'M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z';
    const svgD2='M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z';

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
                            <svg width={120} height={40} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 211" className={st.sgsg}>
                            <g fill='#134A86'>
                                <g>
                                    <path d="M587.5,77.8c0.1,0,0.3,0,0.4,0l1.2,0.2c0.4,0.1,0.9,0.1,1.2,0.2c1.2,1.3,2.2,2.5,3,3.5l51.8,68.2
                                        c4.2,5.4,7.8,9.2,10.6,10.9c3.7,2.2,9.1,3.1,15.6,3.1c6.7,0,12.5-1.7,17.1-5.3c3.6-2.8,6.5-6.2,8.8-10.4c2.4-4.4,3.7-8.9,3.7-13.5
                                        V49.4h-29.8V127c0,1.5,0,2.3-0.8,3.2c-0.9,0-1.6-0.2-2.1-0.4c-1.5-1.4-2.6-2.6-3.3-3.6l-53.7-67.6c-6.2-7.7-14.7-11.4-25.3-11.4
                                        c-9.7,0-17.6,3.6-23.2,10.8c-4.1,5.3-6.4,10.6-6.4,15.6v86.7h30.8V78.9C587.2,78.5,587.4,78,587.5,77.8z"/>
                                    <path d="M99.6,90.9v69.6h101.3c4,0,8.4-1.6,13.2-4.4c5-2.8,9.1-6.4,12.4-10.6c3.8-5.1,5.9-10.4,5.9-16.1V82.7
                                        c0-4.4-1.5-9.2-4.3-14.3c-3-5.5-7-10-12-13.5c-5.3-3.6-11-5.5-17-5.5H99v28h87.3c3.5,0,6.2,0.6,8.4,1.7c4,2.1,6.5,8.1,6.5,14.2
                                        v23.5c0,5-1.3,8.5-3.7,10.9c-2.3,2.4-5.6,3.8-10.3,3.8h-56.4V90.9H99.6z"/>
                                    <path d="M372.5,118.8c12.1,0,18.3-7,18.3-19.5V74.9c0-5.8-3.3-11.4-8.8-16.7c-5.8-5.7-11.8-8.9-17.9-8.9h-83
                                        c-7,0-14,3.5-20.7,9.7c-7.1,6.6-11,13.9-11,22v45.7c0,3.8,1.5,8.4,4.1,13.6c3.1,6.2,7.5,11.1,13,14.8c5.6,3.7,11.7,5.6,18.4,5.6
                                        h104.4v-29.1H287.8c-1.3,0-2.7-0.6-4.2-2.5c-1.6-2-2.1-3.1-2.1-4.8v-5.3H372.5z M281.5,85.8c0-2,0.7-3.9,2.4-5.8
                                        c1.6-1.9,3.2-2.5,4.8-2.5l65.5,0.1c1.6,0,2.9,0.5,4.1,1.3c1.3,1,1.7,2,1.7,3.2v8.8h-78.5V85.8z"/>
                                    <path d="M420,155.1c5.5,3.6,11.5,5.4,18,5.4h77c4.2,0,8.7-1.8,13.3-4.8c5.1-3.3,9.2-7.5,12.3-12.7
                                        c3.3-5.4,5-11.3,5-17.4V87.7c0-14.7-6.1-25.7-18.6-33.3c-5.3-3.2-10.6-5-15.9-5h-75.8c-7.7,0-14.9,3.8-21.6,10.7
                                        c-7,7.2-10.6,15.5-10.6,24.8v39.6c0,5.3,1.5,10.7,4.3,16.2C410.4,146.7,414.6,151.6,420,155.1z M435.4,89.3c0-1.7,1.8-6.2,3.3-8.1
                                        c2.2-3,6.7-3.8,9.7-3.8h50.5c4.9,0,8.5,1.2,11.1,3.3c2.8,2.2,4.3,5.5,4.3,10.3v28.4c0,8.4-3.6,12-11.6,12h-55.5
                                        c-3.9,0-6.7-1.4-8.8-4.1c-2-2.6-3.1-6.1-3.1-10.7V89.3z"/>
                                </g>
                            </g>
                            </svg>
                                
                                </div>    
                            </a>
                    </Link>
                </div>             
                <ul className={statg===false?st.navMenu : st.navMenu+' '+ st.active}>
                    <li><Link href="/"><a>HOME</a></Link></li>
                    {/* <li>ABOUT</li> */}
                    <li className={st.hop}>PRODUCT
                        <ul className={st.droit}>
                            <li onClick={handleClick2}><Link href="/product/security"><a>SECURITY</a></Link></li>
                            <li onClick={handleClick2}><Link href="/product/smart_home"><a>SMART HOME</a></Link></li>
                            <li onClick={handleClick2}><Link href="/product/lighting"><a>LIGHTING</a></Link></li>                    
                            <li onClick={handleClick2}><Link href="/product/electrical"><a>ELECTRICAL</a></Link></li>                         
                        </ul>                        
                    </li>
                    <li>CONTACT US</li>            
                    
                    <li>
                        <a
                        href="https://instagram.com/deonsmartliving?igshid=YmMyMTA2M2Y="
                        target={"_blank"}
                        rel={"noreferrer"}>
                        <div className={st.sos}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" fill="#134A86"/>
                            </svg>
                        </div>
                        </a>
                    </li>  
                    <li>                   
                        <a
                        href="https://www.tiktok.com/@deonsmartliving?lang=id-ID"
                        target={"_blank"}
                        rel={"noreferrer"}>     
                        <div className={st.sos}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">                            
                                <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" fill="#134A86"/>
                            </svg>
                        </div>
                        </a>
                    </li>
                    <li>
                        <div className={st.sos}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">                                
                                <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" fill="#134A86"/>
                            </svg>
                        </div>    
                    </li>                    
                </ul>            
                <div className={st.menuIcon} onClick={handleClick}>                                        
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox={statg===false?svgVb1:svgVb2}>
                        <path d={statg===false?svgD1:svgD2} fill="#134A86"/>
                    </svg>
                    {/* <Image src={statg===false?icgBars:icgTimes} width={20} height={20} alt={"menu"} priority/>                     */}
                </div>

            </nav>
        )    
}