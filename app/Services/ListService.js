import { ProxyState } from "../AppState.js";
import List from "../Models/List.js";

class ListService {
  constructor() {
    console.log("service is working");
  }
  createList(rawList) {
    console.log("creating list from service");
    let list = new List(rawList);
    let lists = ProxyState.lists
    lists.push(list)
  }
}

const service = new ListService();
export default service;
