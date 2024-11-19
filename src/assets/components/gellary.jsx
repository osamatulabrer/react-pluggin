import GellaryItem from "./gellaryItem";


export default function Gellary({products}){
    return(
        <div className="col-span-9 bg-white">
        <div className="grid grid-cols-12 gap-4">
            {products.map(product =>{
                return  <GellaryItem key={product.id} product={product}/>
            })}
        
      
        </div>
      </div>
    )
}