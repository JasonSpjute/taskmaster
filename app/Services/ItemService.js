import { ProxyState } from "../AppState.js"
import Item from "../Models/Item.js"
import { saveState } from "../Utils/LocalStorage.js"

class ItemService{
    complete(id) {
        debugger
        let check = ProxyState.items.find(f=>f.id=id)
        console.log(check)
        // @ts-ignore
        let checker = document.getElementById(id).checked
        check.complete = checker
        
        ProxyState.items=ProxyState.items
        console.log(ProxyState.items)
        
        
     
    

    
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