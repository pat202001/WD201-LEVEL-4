const todoList = require('../todo');
const { all,markAsComplete,add} = todoList();
decribe("TodoList Test Suite",() =>{
    beforeAll(()=>{
        dd({
            title:"Test todo",
            completed: false,
            dueDate: new Date().toLocaleDateString("en-CA")
        }
        );  
    })
    Test("should add new todo",() =>{
       const todoItemsCount =all.length;
        add({
            title:"Test todo",
            completed: false,
            dueDate: new Date().toLocaleDateString("en-CA")
        }
        );
        expect(all.legnth).toBe(todoItemsCount+1)
    });
    test("should mark a todo as complete", () =>{
        expect(all[0].complete).toBe(false);
        markAsComplete(0);
        expect(all[0].complete).toBe(true)
    })
})