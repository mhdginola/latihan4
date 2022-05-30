import st from './Detail.module.css';
import dataProduct from '../../Data/DataProduct/DataProduct';
import DetailCard from '../../Component/DetailCard/DetailCard';

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
        <DetailCard
            key={item.id}
            id={item.id}
            thumb={item.thumb}
            product_name={item.product_name}
        />
        )}  
      </>    
    )
}

export default Detail;