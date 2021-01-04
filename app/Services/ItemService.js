import { ProxyState } from "../AppState.js";
import Item from "../Models/Item.js";
import { saveState } from "../Utils/LocalStorage.js";

class ItemService {
  complete(itemId) {
    let check = ProxyState.items.find((f) => f.itemId == itemId);
    // @ts-ignore

    if (document.getElementById(itemId).checked == true) {
      check.complete = "checked";
    } else {
      check.complete = "";
    }
    ProxyState.items = ProxyState.items;
  }
  delete(itemId) {
    ProxyState.items = ProxyState.items.filter((p) => p.itemId != itemId);
  }
  createItem(rawItem) {
    let items = ProxyState.items;
    items.push(new Item(rawItem));
    ProxyState.items = items;
  }
  constructor() {
    ProxyState.on("items", saveState);
  }
}

export const itemService = new ItemService();
