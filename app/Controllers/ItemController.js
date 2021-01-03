
import { itemService } from "../Services/ItemService.js";

export default class ItemController {
  createItem(listId){
    window.event.preventDefault();
    console.log('create item')
    let form = window.event.target
    let rawItem = {
      // @ts-ignore
      words: form.listItem.value,
      listId: listId
    };
    itemService.createItem(rawItem);
    // @ts-ignore
    form.reset();
  }

  complete(id){
    itemService.complete(id)
    
  }
  delete(id){
    let ok = confirm("Are you sure you want to delete this item?")
    console.log(ok)
    if (ok == true){
      itemService.delete(id);
    }
      
  }
}
