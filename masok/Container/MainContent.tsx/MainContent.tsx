import CardItemV2 from "../../Component/CardItem/CardItemV2/CardItemV2";
import dataProduct from "../../Data/DataProduct/DataProduct";
import st from './MainContent.module.css';

const MainContent =(props:any)=>{
    const data= dataProduct;         
    console.log(props);        
    if (props.id!==undefined){        
        var fit= data.filter(hh=>{           
            return (hh.category==props.id)        
        })
    }else{                
        var fit=data;
    }

    return(
        <div className={st.contg}>       
        {
        fit.map((item)=> 
        <CardItemV2
            key={item.id}
            id={item.id}
            thumb={item.thumb}
            product_name={item.product_name}
            description={item.description}
        />                    
        )
        }
        </div>        
    );
}

export default MainContent;