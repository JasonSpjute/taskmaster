import { generateId } from "../Utils/GenerateId.js";

export default class Item {
  constructor({ words, id, listId }) {
    this.words = words;
    this.id = id || generateId();
    this.listId = listId;
  }

  get Template() {
    return /*html*/ `
        <div class="row">
            <div class="col-11">
                <h6>${this.words}</h6>
            </div>
            <div class="col-1">
                <i class="fas fa-trash-alt btn text-danger" onclick="app.itemController.delete('${this.id}'}"></i>
            </div>
        </div>
        `;
  }
}
