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
            <div class="col">
                <h2>${this.words}</h2>
            </div>
        </div>
        `;
  }
}
