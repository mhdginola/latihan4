import st from './CardItemV2.module.css';
// import dataProduct from '../../../Data/DataProduct/DataProduct';
import Image from 'next/image';

function CardItemV2(){
    return(
        <div className={st.bungkus}>
            <div className={st.cardg} >
                <div className={st.card_img}>                
                    <div className={st.gbr}>
                        <Image src="/images/1.png" width={500} height={500} alt='ITEM' priority/>
                    </div>
                </div>
                <div className={st.card_header}>
                    <h2>Product 1</h2>
                    <p>Deskripsi</p>                                          
                </div>
            </div>
            <div className={st.cardg} >
                <div className={st.card_img}>                
                    <div className={st.gbr}>
                        <Image src="/images/1.png" width={500} height={500} alt='ITEM' priority/>
                    </div>
                </div>
                <div className={st.card_header}>
                    <h2>Product 1</h2>
                    <p>Deskripsi</p>                                          
                </div>
            </div>
            <div className={st.cardg} >
                <div className={st.card_img}>                
                    <div className={st.gbr}>
                        <Image src="/images/1.png" width={500} height={500} alt='ITEM' priority/>
                    </div>
                </div>
                <div className={st.card_header}>
                    <h2>Product 1</h2>
                    <p>Deskripsi</p>                                          
                </div>
            </div>
            <div className={st.cardg} >
                <div className={st.card_img}>                
                    <div className={st.gbr}>
                        <Image src="/images/1.png" width={500} height={500} alt='ITEM' priority/>
                    </div>
                </div>
                <div className={st.card_header}>
                    <h2>Product 1</h2>
                    <p>Deskripsi</p>                                          
                </div>
            </div>
            <div className={st.cardg} >
                <div className={st.card_img}>                
                    <div className={st.gbr}>
                        <Image src="/images/1.png" width={500} height={500} alt='ITEM' priority/>
                    </div>
                </div>
                <div className={st.card_header}>
                    <h2>Product 1</h2>
                    <p>Deskripsi</p>                                          
                </div>
            </div>            
        </div>
        );    
}

export default CardItemV2;