import { ProxyState } from "../AppState.js"
import Item from "../Models/Item.js"
import { saveState } from "../Utils/LocalStorage.js"

class ItemService{
    complete(itemId) {
        let check = ProxyState.items.find(f=>f.itemId=itemId)
        console.log(check)
        // @ts-ignore
        let checker = document.getElementById(itemId).checked
        check.complete = checker
        
        ProxyState.items=ProxyState.items
        console.log(ProxyState.items)
        
        
     
    

    
     }
    delete(itemId) {
        ProxyState.items = ProxyState.items.filter(p => p.itemId != itemId)
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