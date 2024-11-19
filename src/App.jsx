import { useEffect, useState } from "react"
import SideBer from "./assets/components/category"

import { api } from "./api/api";
import CreateProduct from "./CreateProduct/CreateProduct";


function App() {
 const [products,setProducts] = useState([]);
 const [categories,setCategories] = useState([]);

useEffect(()=>{

try{
  async function getData() {
    const conn = await api.get("/products")
  
    setProducts(conn.data)
  }
  getData();
}catch(error){
  console.log(error);
  
}

},[])


useEffect(()=>{

try{
  async function getCategory() {
    const conn = await api.get("/categories")
 
    setCategories(conn.data)
  }
  getCategory();
}catch(error){
  console.log(error);
  
}

},[])

  return (
   <div className="grid grid-cols-12 max-w-screen-lg mx-auto bg-slate-100 gap-4 mt-14 p-3">
    <SideBer categories={categories}/>
   <CreateProduct/>
   
   </div>
  )
}

export default App
