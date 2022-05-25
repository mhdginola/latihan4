import st from './CardItemV2.module.css';
// import dataProduct from '../../../Data/DataProduct/DataProduct';
import Image from 'next/image';

function CardItemV2(props:any){
    return(
        // <div className={st.bungkus}>
            <div className={st.cardg} >
                <div className={st.card_img}>                
                    <div className={st.gbr}>
                        <Image 
                            src={props.thumb} 
                            width={1000} 
                            height={1000} 
                            layout='responsive' 
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
        // </div>
        );    
}

export default CardItemV2;