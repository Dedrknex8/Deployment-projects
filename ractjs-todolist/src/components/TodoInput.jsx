import { useState } from "react"

export default function TodoInput(props) {
    const { handleAddTodos,todoValue,setTodoValue} = props;
    
    function addTodo() {
        if (todoValue.trim()) {
            handleAddTodos(todoValue);
            setTodoValue('');
        }
    }
    return (
        <header>
            <input 
                value={todoValue} 
                onChange={(e) => setTodoValue(e.target.value)   
                } 
                placeholder="Enter Todo ..." 
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        addTodo();
                    }}
                
                }/>
            <button onClick={() => {
                handleAddTodos(todoValue)
                addTodo(todoValue)
                setTodoValue('')
            }}>
                Add
            </button>
        </header>
    );
}
