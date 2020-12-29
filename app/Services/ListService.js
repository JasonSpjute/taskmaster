import List from "../Models/List.js"

class ListService{
    constructor(){
        console.log("service is working")
    }
    createList(){
        console.log("creating list from service")
        let list = new List
    }
}

const service = new ListService()
export default service