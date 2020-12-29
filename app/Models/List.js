import { generateId } from "../Utils/GenerateId.js";

export default class List {
  constructor(title, listId) {
    this.title = title;
    this.listId = listId || generateId();
  }
  get Template() {
    return /*html*/ `
            <div class="row">
            <div class="col-4">    
                <div class="card border-primary">
                    <h5 class="card-header bg-primary">List Title</h5>
                    <div class="card-body">
                        <p class="card-text">a list thing goes here</p>
                        <p class="card-text">a list thing goes here</p>
                        <p class="card-text">a list thing goes here</p>
                    </div>
                    <div class="form-inline align-self-center py-3">
                        <input type="text" class="form-control" id="listItem" placeholder="Add Task" required>
                        <button type="submit" class="btn btn-outline-info" >+</button>
                    </div>
                </div>
            </div>
        </div>`;
  }
}
