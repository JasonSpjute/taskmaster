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
            <div class="col-1 form-check text-center">
              <input class="form-check-input" type="checkbox">
            </div>
            <div class="col-9">
                <h6>${this.words}</h6>
            </div>
            <div class="col-1">
                <button class="fas fa-trash-alt btn text-danger" onclick="app.itemController.delete('${this.id}')"></button>
            </div>
        </div>
        `;
  }
}
