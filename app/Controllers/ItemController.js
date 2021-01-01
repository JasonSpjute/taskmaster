
import { itemService } from "../Services/ItemService.js";

export default class ItemController {
  createItem(listId){
    window.event.preventDefault();
    console.log('create item')
    let form = window.event.target
    let rawItem = {
      words: form.listItem.value,
      listId: listId
    };
    itemService.createItem(rawItem);
    form.reset();
  }
  delete(id){
    console.log("item delete")
      itemService.delete(id)
  }
}
