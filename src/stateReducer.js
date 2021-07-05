import { createContext } from "react"

const stateReducer = (currentState, action) => {
    switch (action.type) {
        case "addEntry": {
            return {
                ...currentState,
                // This takes all entries out of currentState and sets entries state with the current entries, then updates it with the new entry from
                // action.data
                entries: [...currentState.entries, { category: action.category, text: action.text }]
            }
        }

        default: 
            return currentState
    }
}


export default stateReducer

export const stateContext = createContext()

