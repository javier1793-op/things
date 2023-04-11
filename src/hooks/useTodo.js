import { useEffect, useReducer } from "react"
import { todoReduce } from "../todoReduce";

export const useTodo=()=>{

    const inicialState=[];

    const init=() =>{
        return JSON.parse( localStorage.getItem('todos')) || []
    }

    const [Todos, dispatch] = useReducer( todoReduce, inicialState,init)

    useEffect(() => {
        localStorage.setItem('todos',JSON.stringify(Todos))
    }, [Todos])
    
    const countTask = Todos.length
    const countPending = Todos.filter(todos => !todos.done).length
    
    const handleNewTodo = todo =>{
        const action={
            type:'Add Todo',
            payload:todo
        }
        return dispatch(action)
    }

    const handleDeleteTodo = id =>{
        const action={
            type: 'Delete Todo',
            payload: id
        }
        return dispatch (action)
    }

    const handleCompleteTodo = id =>{
        const action={
            type: 'Complete Todo',
            payload:id
        }
        return dispatch(action)
    }

    const handleUpdateTodo = (id, description)=>{
        const action={
            type:'Update Todo',
            payload:{
                id,
                description
            }
        }
        return dispatch(action)
    }

    return{
        handleNewTodo,
        handleDeleteTodo,
        handleCompleteTodo,
        handleUpdateTodo,
        Todos,
        countTask,
        countPending
    }
}