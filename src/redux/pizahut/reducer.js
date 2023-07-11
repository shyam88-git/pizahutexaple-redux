import { BUY_PIZZA } from "./pizza.actionType";
let initialState={

    count:500


};

let pizzaReducer=(state=initialState,action)=>{

    console.log("action performed",action);
     switch(action.type){

        case BUY_PIZZA:
            return{

                    count:(state.count-1>0)?state.count-1:0
            }
            default:
                return state;
     }
}

export {pizzaReducer};