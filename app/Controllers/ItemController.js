import { itemService } from "../Services/ItemService.js";

export default class ItemController {
  createItem(listId) {
    window.event.preventDefault();
    let form = window.event.target;
    let rawItem = {
      // @ts-ignore
      words: form.listItem.value,
      listId: listId,
    };
    itemService.createItem(rawItem);
    // @ts-ignore
    form.reset();
  }

  complete(itemId) {
    itemService.complete(itemId);
  }
  delete(itemId) {
    let ok = confirm("Are you sure you want to delete this item?");
    if (ok == true) {
      itemService.delete(itemId);
    }
  }
}
