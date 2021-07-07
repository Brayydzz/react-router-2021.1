import { createContext } from "react"

export default function stateReducer (currentState, action) {
    switch (action.type) {
        case "addEntry": {


            return {
                ...currentState,
                // This takes all entries out of currentState and sets entries state with the current entries, then updates it with the new entry from
                // action.data
                entries: [...currentState.entries, { category: action.category, text: action.text }]
            }
        }
        case "setCategories": {
            return {
                ...currentState,
                categories: action.categories
            }
        }

        case "setEntries": {
            return {
                ...currentState,
                entries: action.entries
            }
        }

        default: 
            return currentState
    }
}

export const stateContext = createContext()

