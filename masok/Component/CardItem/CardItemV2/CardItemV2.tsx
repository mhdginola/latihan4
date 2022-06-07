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
                            quality={40}                         
                            />
                    </div>
                    <div className={st.lggg}>
                        <Image 
                            src="/images/LD3.svg"
                            width={40} 
                            height={40}                             
                            alt='ITEM' 
                            loading="lazy" 
                            quality={40}                         
                            />
                    </div>
                </div>
                <div className={st.card_header}>
                    <h2>{props.product_name}</h2>
                    <p>{props.description}</p>                                          
                </div>
            </div>                                 
            </a>
        </Link>        
        );   
}

export default CardItemV2;