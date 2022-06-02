import st from './CardItemV3.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

function CardItemV2(props:any){
    // const {dataUs} =props;
    const router =useRouter();
    console.log(props);
    return(    
        <div onClick={()=>router.push('/detail/'+props.id)}>
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
                            src="/images/icon3.png"
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
        </div>        
        );   
}

export default CardItemV2;