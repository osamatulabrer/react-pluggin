import { useState } from "react"


export default function useHook(initValue){
    const [value,setValue] = useState(initValue)
    const handleChange = (e)=>{
        setValue(e.target.value)
    }
    const handleClear = ()=>{
        setValue('')
    }
    return {
        attr:{
        value:value,
        onChange:handleChange
    },
    onClear : handleClear
       
    }
}