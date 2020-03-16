import React from 'react'
import {connect} from 'react-redux';
import {buyCake} from './redux/cake/cakeAction';


function CakeContainer(props) {
    return (
        <div>
        <h3>Number of cakes {props.data}</h3>
            <button onClick={(e)=>props.buyCake(Math.random())}>Buy cake</button>
        </div>
    )
}

const mapStateToProps = (state) =>{

    console.log("state",state);
   return {
       data: state.numOfCakes
   }
}

const mapDispatchToProps =  dispatch =>{
    
    return {
         buyCake:(d)=>dispatch(buyCake(d))
    }
}


export default 
connect(mapStateToProps,
mapDispatchToProps)
(CakeContainer)
