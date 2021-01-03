import { ProxyState } from "../AppState.js";
import ListService from "../Services/ListService.js";

function _draw(){
  let lists = ProxyState.lists;
  let templates = "";
  lists.forEach(list => {
    templates += list.Template;
  });
  document.getElementById('lists').innerHTML = templates
}
export default class ListController {
  constructor() {
    console.log("hello from the controller");
    ProxyState.on("lists", _draw)
    ProxyState.on("items", _draw)
    _draw();
  }
  createList(event) {
    event.preventDefault();
    let form = event.target;
    let rawList = {
      title: form.title.value,
      bgColor: form.colors.value
    }
    
    ListService.createList(rawList);
    _draw();
    form.reset();
  }

  deleteList(listId){
    let ok = confirm("Are you sure you want to delete this list?")
    console.log(ok)
    if (ok == true){
    ListService.deleteList(listId);
    _draw();
    }
  }
}
