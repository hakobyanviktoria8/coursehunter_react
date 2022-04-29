const INITIAL_STATE = {
    dataSignIn: null
}

const userReducer = (state= INITIAL_STATE, action) =>{
    switch(action.type){
        case "SET_CURRENT_USER":
            return {
                ...state,
                dataSignIn: action.payload
            }
        default:
            return state
    }
}