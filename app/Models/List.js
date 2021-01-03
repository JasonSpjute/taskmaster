import { ProxyState } from "../AppState.js";
import { generateId } from "../Utils/GenerateId.js";

export default class List {
  constructor({title, bgColor, listId}) {
    this.title = title;
    this.bgColor = bgColor;
    this.listId = listId || generateId();
  }
  get Template() {
    return /*html*/ `
        <div class="col-4">    
          <div class="card my-3 border-${this.bgColor} shadow">
            <div class="card-header text-right bg-${this.bgColor}">
              <button class="btn" onclick="app.listController.deleteList('${this.listId}')">X</button>
              <h2 class="text-center">${this.title}</h2>
              <h4 class="text-center">${this.length}</h4>
            </div>
              <div class="card-body">
                ${this.Items}
              </div>
              <form class="form-inline align-self-center py-3" onsubmit="app.itemController.createItem('${this.listId}')">
                <input type="text" class="form-control" name="listItem" id="listItem" placeholder="Add Task" required>
                <button type="submit" class="btn btn-outline-info">+</button>
              </form>
            </div>
          </div>`;
  }
  get Items(){
    let template = ""
    let items = ProxyState.items.filter(l => l.listId == this.listId)
    items.forEach(l=> template += l.Template)
    return template
  }
  get length(){
    let items = ProxyState.items.filter(l => l.listId == this.listId)
    return items.length
  }
}


