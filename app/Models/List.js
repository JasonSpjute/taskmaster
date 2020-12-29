import { generateId } from "../Utils/GenerateId.js"

export default class List{
    constructor(title, listId){
        this.title = title
        this.listId = listId || generateId()
    }
}