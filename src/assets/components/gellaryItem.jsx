import { getImage } from "../helper/getImage"


export default function GellaryItem({product}){
    let imgLink = getImage(`../blog_images/${product.image}`)

    return(
        <div className="col-span-4 rounded-sm shadow-sm overflow-hidden border">
        <img className="h-52 w-full" src={imgLink} alt="asdf" />
        <div className="p-3 space-y-3">
          <p className="text-xl font-semibold">{product.title}</p>
          <p className="text-lg text-slate-500">{product.category}</p>
          <div className="flex justify-between">
            <span>${product.price}</span>
            <span>{product.ratting}</span>
          </div>
          <div className="bg-green-600 text-white font-medium py-2 rounded-sm  text-center">read more</div>
        </div>
      </div>
    )
}