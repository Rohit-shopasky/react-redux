import {BUY_CAKE} from './cakeTypes'; 

export const buyCake = () =>{
    console.log("called");
    return {
        type:BUY_CAKE
    }
}

