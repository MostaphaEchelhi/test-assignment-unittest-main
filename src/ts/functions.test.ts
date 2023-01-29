import * as main from '../ts/main';
import * as functions from '../ts/functions';
import { Todo } from "../ts/models/Todo";
   
   /**************************change Todos*****************************/
    
    test("should change todo to not done", () => {
        
        //Arrenge
        let todos: Todo = { text: 'string', done: false };

        //Act
        functions.changeTodo(todos)

        //Assert
        expect(todos).not.toBe(true)
    });

    /******************************* remove All Todos **********************/

    test("should remove by length", () => {
        
        //Arrange    
        let todos: Todo[]= [{text:"Shopping", done: true}];
        
        //Act    
        functions.removeAllTodos(todos);
        
        //Assert    
        expect(todos.length).toBe(0) 
    });