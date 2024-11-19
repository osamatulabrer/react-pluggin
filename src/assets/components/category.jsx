

function SideBer({categories}){
    return(
        <div className="col-span-3 bg-white font-semibold">
            <h2 className="text-3xl font-semibold mb-5 px-2">product category</h2>
            <ul className="sticky top-3">
                {categories.map(category =>{
                    return <li key={category.id} className="bg-green-200 hover:bg-green-600 hover:text-white py-3 px-2 rounded-sm mx-2 shadow-sm mb-3">
                    <a className="text-capitalize" href="#">
                    {category.category}
                    </a>
                </li>
                })}
             
            
            </ul>
      </div>
      
    )
}
export default SideBer;