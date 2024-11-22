
import { Outlet,useLoaderData } from "react-router-dom";
import SideBer from "../components/category";
// import { CategoryLoader } from "../loder/Loader";

const categories = [
    {
      "id": "1",
      "category": "bed"
    },
    {
      "id": "2",
      "category": "light"
    },
    {
      "id": "3",
      "category": "dining table"
    },
    {
      "id": "4",
      "category": "mirror"
    },
    {
      "id": "5",
      "category": "wall clock"
    }
  ];

export default function Root(){
    return (
        <div className="grid grid-cols-12 max-w-screen-lg mx-auto bg-slate-100 gap-4 mt-14 p-3">
        <SideBer categories={categories}/>
        <Outlet/>
       
       </div>
    )
}
