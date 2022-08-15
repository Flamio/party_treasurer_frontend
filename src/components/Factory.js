import { ParticipantsActions } from "../actions"
import { ProductsActions } from "../actions/ProductsActions"
import { Calculations } from "./Calculations"
import { Participants } from "./Participants"
import { Products } from "./Products"
import { Usings } from "./Usings"

export const Factory = {
    getComponent
}


function getComponent(step) {    
    switch(step){
        case 0: {
            return {component: (<Participants/>), onPlusClick: () => ParticipantsActions.increase() }
        }

        case 1: {
            return {component: (<Products/>), onPlusClick: () => ProductsActions.add()}
        }

        case 2: {
            return {component: (<Usings/>)}
        }

        case 3: {
            return {component: (<Calculations/>)}
        }

        default: 
            return {component: (<div></div>)}
    }
}