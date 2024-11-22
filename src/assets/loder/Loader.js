import { api } from "../../api/api"


async function CategoryLoader(){
    const conn = await api.get('/categories');
   
    
    return conn.data
}
export {CategoryLoader}