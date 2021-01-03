import { ProxyState } from "../AppState.js"
import Item from "../Models/Item.js"
import { saveState } from "../Utils/LocalStorage.js"

class ItemService{
    complete(id) {
        let check = ProxyState.items.find(f=>f.id=id)
        if (document.getElementById(id).checked = true){
            check.complete = "checked"
        } else {
            check.complete = ""
        }
        ProxyState.items = ProxyState.items
        console.log(ProxyState.items)
     
    
    //     ProxyState.items = ProxyState.items
    console.log(check.complete)
     }
    delete(id) {
        ProxyState.items = ProxyState.items.filter(p => p.id != id)
    }
    createItem(rawItem){
        let items = ProxyState.items
        items.push(new Item(rawItem))
        ProxyState.items = items
        console.log(items)
    }
    constructor(){
        ProxyState.on("items", saveState)
    }
    
}

export const itemService = new ItemService()