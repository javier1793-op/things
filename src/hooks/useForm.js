import { useState } from "react"

export const  useForm = (initialForm = {})=>{
    const [form, setForm] = useState(initialForm)

    const inputChange = e =>{

        const name= e.target.name;
        const value = e.target.value;

        setForm(
           { ...form,
            [name]:value,}
        )
    }

    const resetChange=()=>{
        setForm(initialForm)
    }

    return{
        ...form,
        form,
        inputChange,
        resetChange
    }
}