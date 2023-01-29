/**
* @jest-environment jsdom
*/

import * as main from '../ts/main';
import * as functions from '../ts/functions';
import { Todo } from "../ts/models/Todo";


beforeEach(() => {
    document.body.innerHTML = ``;});

    /****************************Clear Todos***********************/

    test('should clear Todos', () => {
        // Arrange
        document.body.innerHTML = `<ul id="todos" class="todo"></ul>`;
        let spy = jest.spyOn(functions, "removeAllTodos").mockReturnValue();
        
        // Act
        main.clearTodos([]);
    
        // Assert
        expect(spy).toHaveBeenCalled();
    });

    
    test('should clear create Html', () => {
        // Arrange
        document.body.innerHTML = `<ul id="todos" class="todo"></ul>`;
        let spy = jest.spyOn(main, "createHtml").mockReturnValue();
        
        // Act
        main.clearTodos([]);
    
        // Assert
        expect(spy).toHaveBeenCalled()
        expect(document.getElementById("todos") as HTMLUListElement)
    });

    /************************Create New Todo****************************/

    test("should create New Todo",()=>{
    
        //Arrenge    
        document.body.innerHTML = `<ul id="todos" class="todo"></ul>`;
        let todoText = "new todo";
        let todos: Todo[] = [];
        let result = document.getElementById('todos');
    
        //Act    
        main.createNewTodo(todoText, todos,);
    
        //Assert     
        expect(result?.innerHTML).not.toBeNull();
        expect(result).toBeTruthy();
    });

    test("should not create New Todo", () => {
        //Arrenge    
        document.body.innerHTML = `<div id="error" class="error"></div>`;
        let todoText = "No";
        let todos: Todo[]= [];
        let result = document.getElementById('error');
        //Act    
        main.createNewTodo(todoText, todos);
        //Assert
        expect(result?.innerHTML).not.toBeNull();
        expect(result).toBeTruthy();
    
    });

    /*************************Toggle Todo*******************************/

    test("should toggle the todo list", () => {
       
        //Arrenge
        document.body.innerHTML = `<ul id="todos" class="todo"></ul>`;
        let spyOn = jest.spyOn(functions, "changeTodo").mockReturnValue();
        let spy = jest.spyOn(main, "createHtml").mockReturnValue();
        let todos: Todo = { text: 'string', done: false };
       
        //Act   
        main.toggleTodo(todos);
        
        //Assert    
        expect(spyOn).toHaveBeenCalled();
        expect(spy).toHaveBeenCalled();
    });


    test("should show error message", () => {
        //Arrenge    
        document.body.innerHTML = `<div id="error" class="error"></div>`;
        let errorContainer: HTMLDivElement = document.getElementById("error") as HTMLDivElement;
        let error = "Du måste ange minst tre bokstäver"
        
        //Act    
        main.displayError(error,true);
        
        //Assert    
        expect(errorContainer.innerHTML).toBe(error);});











