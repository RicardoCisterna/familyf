import {Dispatch} from 'redux'



const initialState ={
    open: false,
    setOpen: false,
}

//action type

const SETOPEN = 'transaction/setopen'
const SETCLOSE = 'transaction/setclose'


//action creators 

export const openTransacionModal = () =>{
  console.log('openTransacionModal')
    return({
    type: SETOPEN,
})}
export const closeTransacionModal = () =>(
    {
    type: SETCLOSE,
}
)

const transactionReducer = (state = initialState, action: any) =>{
   
    switch (action.type) {
        case SETOPEN:
            console.log('reducer set')
            return ({
                ...state,
                open: true,
                setOpen: true,
            })
            
        case SETCLOSE:
            return({
                ...state,
                open: false,
                setOpen: false,
            })
    
        default:
            return {...state}
    }
}


export default transactionReducer