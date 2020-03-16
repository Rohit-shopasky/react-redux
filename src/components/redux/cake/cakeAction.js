import {BUY_CAKE} from './cakeTypes'; 



export const buyCake = (names) =>{
    console.log("called",names);
    return {
        type:BUY_CAKE,
        payload:names
    }
}

