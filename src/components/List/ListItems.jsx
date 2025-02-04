import { useState } from "react"
import Item from "./Item"

function ListItems() {

    const [items, setItems] = useState([])
    const [newItem, setNewItem] = useState()

    return (
        <>
            <ul>
                <Item items={items} />
            </ul>

            <input 
                type="text" 
                value={newItem}
                onChange={(event) => setNewItem(event.target.value)} />

            <button onClick={() => {
                setItems([...items, newItem])
                setNewItem('')
            }}>Add List Item</button>

        </>
    )
}

export default ListItems