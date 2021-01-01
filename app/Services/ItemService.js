import { ProxyState } from "../AppState.js"
import Item from "../Models/Item.js"

class ItemService{
    delete(id) {
        ProxyState.items = ProxyState.items.filter(p => p.id != id)
    }
    createItem(rawItem){
        let items = ProxyState.items
        items.push(new Item(rawItem))
        ProxyState.items = items
    }
    
}

export const itemService = new ItemService()