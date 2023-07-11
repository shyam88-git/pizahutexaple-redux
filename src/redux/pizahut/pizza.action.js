import { BUY_PIZZA } from "./pizza.actionType";

 let buyPizza=()=>{

    console.log("action performed");
    return{

        type:BUY_PIZZA,
        payload:'purchase a pizza'

    }


}

export default buyPizza;