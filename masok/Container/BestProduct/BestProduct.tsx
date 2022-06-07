import CardItemV2 from "../../Component/CardItem/CardItemV2/CardItemV2";

export default function BestProduct(){
    return(
        <div className="bpg">
            <h1>Best Product</h1>
            <hr />
            <CardItemV2            
            id="1"
            thumb="/images/1.png"
            product_name="Product 1"
            description="Desk 1"
            />
            <CardItemV2            
            id="2"
            thumb="/images/2.png"
            product_name="Product 2"
            description="Desk 2"
            />
            <CardItemV2            
            id="3"
            thumb="/images/3.png"
            product_name="Product 3"
            description="Desk 3"
            />
        </div>
    )
}