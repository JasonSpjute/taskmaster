import { ProxyState } from "../AppState.js";
import List from "../Models/List.js";

class ListService {

  createList(rawList) {
    console.log("creating list from service");
    let list = new List(rawList);
    let lists = ProxyState.lists
    lists.push(list)
  }
  deleteList(listId) {
    let listIndex = ProxyState.lists.findIndex(list => list.listId == listId);
    ProxyState.lists.splice(listIndex, 1);
  }
}

const service = new ListService();
export default service;
