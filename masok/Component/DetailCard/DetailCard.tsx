import Image from 'next/image';
import dataSpek from '../../Data/DataSpek/DataSpek';
import Spek from '../Spek/Spek';
import st from './DetailCard.module.css';

const DetailCard =(props:any)=>{    
    const dtgg=dataSpek;    
    console.log(dtgg[0][props.spg]);    

    const it =dtgg[props.spg-1].map((item)=>
        <Spek
            key={item.id}
            sp={item.sp}
            dt={item.dt}
        />  
    )

    return(        
        <div className={st.container}>                                    
            <div className={st.imgdet}>
                <div className={st.mainImg}>
                    {/* <img className={st.picg} src={props.thumb} alt="Cool green dress with red bell"/> */}
                    <Image 
                        src={props.thumb}
                        width={400}
                        height={400}
                        alt='img'   
                        className={st.picg}                                            
                    />
                </div>
                <div className={st.bellImg}>
                    <Image 
                        src={props.thumb1}
                        width={100}
                        height={100}
                        alt='img'   
                        className={st.picgb}                    
                        
                    />
                    <Image 
                        src={props.thumb2}
                        width={100}
                        height={100}
                        alt='img'   
                        className={st.picgb}                    
                        
                    />
                    <Image 
                        src={props.thumb3}
                        width={100}
                        height={100}
                        alt='img'   
                        className={st.picgb}                    
                        
                    />
                </div>                
            </div>                            
            <div className={st.descdet}>
                <h1>{props.product_name}</h1>
                <div className="description">
                    <hr />
                    <h2>Specification</h2>
                    <table>
                        <tbody>
                            {it}
                        </tbody>                        
                    </table>                                                                        
                </div>
            </div>               
        </div>        
    )
}

export default DetailCard;