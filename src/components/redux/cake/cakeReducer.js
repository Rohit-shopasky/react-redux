import {BUY_CAKE} from './cakeTypes';

// const initalState = {
//     numOfCakes:10
// }

const initalState = {
    numOfCakes:10
}

// const initalState = {
//     data:["rohit"]
// };

const cakeReducer =(state=initalState,action)=>{
switch(action.type){
    case BUY_CAKE: 
         console.log("action",action);
         console.log("state.data",state);
        //  let old = state.data;
        //  old.push(action.payload);
        //  console.log("oldd",old);
        return{
        ...state,
        numOfCakes: state.numOfCakes - 1
       // data:old
    }
    default: return state
}
}

export default cakeReducer; 
