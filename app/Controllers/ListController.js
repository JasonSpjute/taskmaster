import ListService from "../Services/ListService.js"
export default class ListController{
    constructor(){
        console.log("hello from the controller")
    }
    createList(){
        window.event.preventDefault()
        console.log("create list")
    }
}