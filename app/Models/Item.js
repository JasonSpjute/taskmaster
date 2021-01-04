import { generateId } from "../Utils/GenerateId.js";

export default class Item {
  constructor({ words, itemId, listId, complete }) {
    this.words = words;
    this.itemId = itemId || generateId();
    this.listId = listId;
    this.complete = complete || "";
  }

  get Template() {
    return /*html*/ `
        <div class="row">
            <div class="col-1 text-center">
              <input id="${this.itemId}" type="checkbox" onchange="app.itemController.complete('${this.itemId}')" ${this.complete}>
              </div>
            <div class="col-9">
                <h6>${this.words}</h6>
            </div>
            <div class="col-1">
                <button class="fas fa-trash-alt btn text-danger" onclick="app.itemController.delete('${this.itemId}')"></button>
            </div>
        </div>
        `;
  }
}
