import { useContext } from "react"
import { stateContext } from "../stateReducer"

const Home = () => {
    const { entries, categories} = useContext(stateContext)
    
    return (
        <div>
            <h1>Home</h1>
            {entries.map((entry, index) => (
                <div key={index}>
                    <h2>{categories.find(cat => cat.id == entry.category_id).name}</h2>
                    <p>{entry.text}</p>
                </div>
            ))}
        </div>
    )
}

export default Home
