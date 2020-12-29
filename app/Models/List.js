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
          <div class="card border-${this.bgColor}">
            <div class="card-header text-right bg-${this.bgColor}">
              <button class="btn" onclick="app.listController.deleteList('${this.listId}')">X</button>
              <h5 class="text-center">${this.title}</h5>
            </div>
              <div class="card-body">
                <p class="card-text">a list thing goes here</p>
                <p class="card-text">a list thing goes here</p>
                <p class="card-text">a list thing goes here</p>
              </div>
              <div class="form-inline align-self-center py-3">
                <input type="text" class="form-control" id="listItem" placeholder="Add Task" required>
                <button type="submit" class="btn btn-outline-info">+</button>
              </div>
            </div>
          </div>`;
  }
}
