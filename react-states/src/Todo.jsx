import { useState } from "react";
import { v4 as uuidv4} from 'uuid';

export default function Todo(){
    let [todos, settodos] = useState([{task:"sample-task", id:uuidv4(),isDone:false}]);
    let [newtodo, setnewtodo] = useState([""]);
    let addnewTask = ()=>{
       settodos((prevtodos)=>{
        return [...prevtodos, {task: newtodo, id:uuidv4(),isDone:false}];
       });
       setnewtodo("");
    };
    let updateTodoValue = (event)=>{
   setnewtodo(event.target.value);
    };
    let deleteTodo = (id) => {
        settodos ((prevTodos)=>todos.filter((prevTodos) => prevTodos.id != id));
          };

          let markAllDone = () =>{
            settodos(
                todos.map((todo)=>{
                    return {
                        ...todo,
                        isDone:true,
                    };
                })
            );
          };

        let markasDone = (id) => {
            settodos((prevTodos) => {
                return prevTodos.map((todo) => {
                    if (todo.id === id) {
                        return {
                            ...todo,
                            isDone: true,
                        };
                    }
                    return todo; // Return the todo unchanged if it's not the one to mark as done
                });
            });
        };
        
    return( 
        <div>
         
            <input placeholder="add a task" value={newtodo} onChange={updateTodoValue}></input>
            <br></br> <br></br>
            <button onClick={addnewTask}>Add task</button><br></br> <hr></hr> <hr></hr>

            <h4>Tasks  To do</h4>
            <ul> 
                {todos.map((todo)=>{
                 return <li key={todo.id}>
                    <span style={todo.isDone? {textDecorationLine: "line-through"}: {}}>{todo.task} </span>
                    &nbsp; &nbsp; &nbsp;
                    <button  onClick = { () => deleteTodo(todo.id)}>Delete</button>
                    <button onClick = { () => markasDone(todo.id)}>Mark as Done</button>

        
                   
                    </li>
                })}

            </ul>
            <button onClick={markAllDone}>markAllDone</button> 

        </div>
    )
}