import { AGE_UP_FROM_SAGA, AGE_DOWN_FROM_SAGA } from '../actions/actionTypes'

const initialState = {
    age:20
};

const reducer = (state=initialState, action) => {
    const newState = {...state};

    switch(action.type){
        case AGE_UP_FROM_SAGA: 
            newState.age += action.value;
            break;
        
        case AGE_DOWN_FROM_SAGA: 
            newState.age -= action.value;
            break;
    }
    return newState;
};

export default reducer;