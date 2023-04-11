export const todoReduce= (inicialState, action)=>{

    switch (action.type) {
        case 'Add Todo':
            return [...inicialState,action.payload];

        case 'Delete Todo':
            return inicialState.filter(Todo => Todo.id !== action.payload );

        case 'Complete Todo':
            return inicialState.map(Todo => 
                    {
                        if(Todo.id === action.payload){
                            return{
                                ...Todo,
                                done: !Todo.done
                            }
                        }
                    }
                )    

        case 'Update Todo':
            return inicialState.map(Todo =>{
                if(Todo.id === action.payload.id){
                    return{
                        ...Todo,
                        description: action.payload.description
                    }
                }
            })
        default:
            return inicialState;
    }
}