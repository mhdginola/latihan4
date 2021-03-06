import st from './CardItemV2.module.css';
// import dataProduct from '../../../Data/DataProduct/DataProduct';
import Image from 'next/image';
import Link from 'next/link';

function CardItemV2(props:any){
    return(    
        <Link href={'detail/'+props.id}><a>
            <div className={st.cardg} >
                <div className={st.card_img}>                
                    <div className={st.gbr}>
                        <Image 
                            src={props.thumb} 
                            width={200} 
                            height={200}                             
                            alt='ITEM' 
                            loading="lazy" 
                            quality={50}                         
                            />
                    </div>                    
                </div>
                <div className={st.card_header}>
                    <div className={st.lggg}>                        
                        <svg version="1.1" width={40} height={40} id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 800 800" xmlSpace="preserve">
                            <g>
                                <path fill='#ffffff' d="M601.5,179.8c18.7,0,36.4,7.4,49.8,20.7c13.4,13.3,20.6,31.1,20.6,49.8c0,6,2.4,11.3,6.3,15.2
		                            c3.9,4,9.4,6.3,15.2,6.3c12,0,21.5-9.6,21.5-21.6c0.2-30.3-11.7-58.9-33.2-80.3c-21.4-21.5-50-33.3-80.3-33.3
		                            c-11.9,0-21.5,9.7-21.5,21.5C580.1,170.3,589.6,179.8,601.5,179.8z"/>
	                            <path fill='#ffffff' d="M13.9,195v135.7h423.5c16.8,0,30.2,3,40.7,8.4c19.4,10,31.6,39.3,31.6,68.5v114c-0.1,24.2-6.6,41.2-17.9,52.9
		                            c-11.3,11.8-27.3,18.3-49.7,18.3H168.5V396.5H16.9v337.7h491.3c19.3,0,40.9-7.8,64.1-21.1c24.1-13.7,44.2-30.9,60.3-51.3
		                            c18.6-24.5,28.6-50.6,28.6-78V356.5c0-21.4-7.4-44.6-20.6-69.4c-14.4-26.7-33.9-48.6-58.1-65.4C557,204.1,529.2,195,499.8,195H13.9z"/>
	                            <path fill='#ffffff' d="M601.5,65.8c-11.9,0-21.5,9.6-21.5,21.6c0,11.9,9.6,21.5,21.5,21.5c37.8,0,73.4,14.8,100.1,41.4
		                            c26.7,26.7,41.5,62.3,41.5,100c0,6,2.3,11.3,6.2,15.2c3.9,4,9.3,6.3,15.3,6.3c11.9,0,21.5-9.6,21.5-21.6
		                            c0-49.3-19.2-95.5-54.1-130.4C697.1,85,650.8,65.8,601.5,65.8z"/>
                            </g>
                        </svg>
                    </div>
                    <h2>{props.product_name}</h2>
                    <h5>{props.description}</h5>
                    <h6>{props.description2}</h6>
                </div>
            </div>                                 
            </a>
        </Link>        
        );   
}

export default CardItemV2;