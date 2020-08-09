import { ADD, MIN, ADUN } from "./actionTypes";

export function add(){
    return{
        type: ADD
    }
}
export function minus(){
    return{
        type: MIN
    }
}


export function adun(number){
         return {
           type: ADUN,
           payload: number
         };
       };


//putem face func asyncrone datorita lui redux-thunk
export function asyncAdd(number) {
    return ( dispatch) =>{
        setTimeout(() => {
            dispatch(adun(number))
        }, 1000)
    }
    
}