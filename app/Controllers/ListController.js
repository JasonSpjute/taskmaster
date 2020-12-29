import ListService from "../Services/ListService.js"
export default class ListController{
    constructor(){
        console.log("hello from the controller")
    }
    createList(){
        window.event.preventDefault()
        let form = window.event.target
        console.log("create list from controller")
        ListService.createList()
    }
}