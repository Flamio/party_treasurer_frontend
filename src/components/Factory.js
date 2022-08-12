import { ParticipantsActions } from "../actions"
import { ProductsActions } from "../actions/ProductsActions"
import { Participants } from "./Participants"
import { Products } from "./Products"

export const Factory = {
    getComponent
}



function getComponent(step) {    
    switch(step){
        case 0: {
            return {component: (<Participants/>), onPlusClick: () => ParticipantsActions.increase()}
        }

        case 1: {
            return {component: (<Products/>), onPlusClick: () => ProductsActions.add()}
        }

        default: 
            return {component: (<div></div>)}
    }
}