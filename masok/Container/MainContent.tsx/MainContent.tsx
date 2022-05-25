import CardItemV2 from "../../Component/CardItem/CardItemV2/CardItemV2";
import dataProduct from "../../Data/DataProduct/DataProduct";

const MainContent =(props:any)=>{
    const data= dataProduct;         
    console.log(props);        
    if (props.id!==undefined){
        console.log('masuk');
        var fit= data.filter(hh=>{           
            return (hh.category==props.id)        
        })
    }else{
        console.log('keluar');        
        var fit=data;
    }

    return(
        <>       
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
        </>        
    );
}

export default MainContent;