import {Dispatch} from 'redux'



const initialState ={
    modal:{
    open: false,
    setOpen: false,
    id:'string',
    },
    transactions:{
        rows: [
            { id:'1',nombre: "papas", monto: 1000, categoria: "comida", descripcion: "bar" },
            { id:'2',nombre: "otra cosa", monto: 1000, categoria: "comida", descripcion: "bar" },
            {
              id:'3',
              nombre: "otra cosa mas",
              monto: 1000,
              categoria: "comida",
              descripcion: "bar"
            },
            { id:'4',nombre: "cerveza", monto: 1000, categoria: "comida", descripcion: "bar" }
          ]
    }
}

//action type

const SETOPEN = 'modal/setopen'
const SETCLOSE = 'modal/setclose'
const SETEDITTRANSACTION ='transaction/setEdit'
const EDITRANSACTION='transaction/EDIT'


//action creators 

export const openTransacionModal = (payload: any) =>{
    return({
    type: SETOPEN,
    payload
})}
export const closeTransacionModal = () =>(
    {
    type: SETCLOSE,
}
)
export const setEditTransaction = (payload:any) =>{
    {
        return({
            type: SETEDITTRANSACTION,
            payload
        })
    }
}



const transactionReducer = (state = initialState, action: any) =>{
   
    switch (action.type) {
        case SETOPEN:
            const open = state.modal.id
            if (open ==action.payload){
                return ({
                    ...state,
                    modal:{
                        open:true,
                        setOpen:true,
                    }
                })
            }else{
            return ({
                ...state,
                modal:{
                    open:false,
                    setOpen:false,
                }
            })}
            
        case SETCLOSE:
            return({
                ...state,
                modal:{
                    open:false,
                    setOpen:false,
                }
            })
        case SETEDITTRANSACTION:
            return({
                ...state,
                id: action.payload
            })    
    
        default:
            return {...state}
    }
}


export default transactionReducer