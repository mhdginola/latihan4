import CardItemV2 from "../../Component/CardItem/CardItemV2/CardItemV2";
import dataProduct from "../../Data/DataProduct/DataProduct";
// import './MainContent.css';
// import { useLocation } from "react-router-dom";
// import { useRouter } from "next/router";

const MainContent =()=>{
    const data= dataProduct;
    // const location = useRouter();        
    // const fit= data.filter(hh=>{
    //     return (hh.category===location.state.test)
    // })

    return(
        <>       
        {
        data.map((item)=> 
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