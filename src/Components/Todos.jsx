import React from "react";
import { removeTodo  } from "../features/todo/todoSlice";
import {useSelector,useDispatch} from "react-redux"

function Todos () {
    const todos = useSelector(state=>state.todos)
    const dispatch = useDispatch()

    return (
        <>
          
                {
                todos.map((todo)=> (
                    <li key = {todo.id}>{todo.text}
                                <button onClick = {()=>dispatch(removeTodo(todo.id))}>
                                Delete</button>
                                </li>
                ))}
            
            </>
        
    )
}
export default Todos;