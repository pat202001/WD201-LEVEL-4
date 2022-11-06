const { moduleExpression } = require("@babel/types");

const todolist=() =>{
    let  all =[];
    const add=(todoItem)=>{
        all.push.completed=true;

    }
    const markAsComplete=()=>{
        all[index].completed=true;
    }
    const overdue = () =>{
    return all.filter((item)=> item.dueDate < new Date().toLocaleDateString["en-CA"]);
    }
    const dueToday =() =>{
        return all.filter((item)=> item.dueDate === new Date().toLocaleDateString("en-CA"));


    }
    const dueLater =()=>{
        return all.filter((item)=>item.dueDate > new Date().toLocaleDateString("en-CA"));

    }
    const toDisplayableList =(list)=>{
        return list.map(item => `${item.completed ? '[x]': '[]'} ${item.title} ${item.dueDate === new Date().toLocaleDateString("en-CA")}`)
    }
    return {all,add,markAsComplete,overdue,dueToday,dueLater,toDisplayableList};

}
const  todos=todolist();
const formattedDate = d => {
    return d.toISOString().split("T")[0]
}
var d  =  new Date();
const today=formattedDate(d)
const yesterday =formattedDate(new Date(d.setDate(d.getDate()-1)))
const tomorrow =formattedDate(new Date(d.setDate(d.getDate()+2)))
todos.add({title:'submit assignment',dueDate:yesterday,completed:false})
todos.add({title:'pay rent ',dueDate:today,completed:true})
todos.add({tirle:'service vehicle',dueDate:today,completed:false})
todos.add({title:'File taxes',dueDate:tomorrow,completed:false})
todos.add({title:'Pay electric Bill',dueDate:tomorrow,completed:false})
 
console.log("My Todo-List");
console.log("overdue");
var overdues = todos.overdue;
var formattedoverdues = todos.toDisplayableList(overdues)
console.log(formattedoverdues)
console.log("\n\n")
console.log("Due Today")
let itemDueToday = todos.dueToday()
let formattedItemsdueToady = todos.toDisplayableList(itemDueToday)
console.log(formattedItemsdueToady)
console.lobg("\n\n")
 console.log("Due Later")
 let itemsDueLater  = todos.dueLater(
   
 )

module.exports =todolist