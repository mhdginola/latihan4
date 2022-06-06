import st from './Detail.module.css';
import dataProduct from '../../Data/DataProduct/DataProduct';
import DetailCard from '../../Component/DetailCard/DetailCard';
import DetailCard2 from '../../Component/DetailCard2/DetailCard2';

const Detail =(props:any)=>{    
    const data= dataProduct;    
    if (props.id!==undefined){        
        var fit= data.filter(hh=>{           
            return (hh.id==props.id)        
        })
    }else{                
        var fit= data.filter(hh=>{           
            return (hh.id==props.id)        
        })
    }          
    return(        
      <>
      {fit.map((item)=> 
        <DetailCard2
            key={item.id}
            id={item.id}
            thumb={item.thumb}
            thumb1={item.thumb1}
            thumb2={item.thumb2}
            thumb3={item.thumb3}
            product_name={item.product_name}
            spg={item.id}
        />
        )}  
      </>    
    )
}

export default Detail;