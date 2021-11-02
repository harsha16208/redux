import {ACTIONTYPES} from "../action_types/actiontypes"

export const initialstate={
    products:[
    ]
}


export const productsreducer=(state=initialstate,action)=>{
    switch(action.type)
    {
        case ACTIONTYPES.GET_PRODUCTS:
            return {...state,
                products:action.payload
            }
        default:
            return state
    }
}

export const selectedproduct={}

export const selectedproductreducer=(state=selectedproduct,action)=>{
    switch(action.type)
    {
        case ACTIONTYPES.SET_PRODUCT:
            return action.payload
            
        
        case ACTIONTYPES.CLEAR_PRODUCT:
            return {}
        default:
            return state
    }
}

