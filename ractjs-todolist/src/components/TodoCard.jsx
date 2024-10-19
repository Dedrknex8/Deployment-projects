import React from 'react'

export default function TodoCard(props) {
  const {children,handleDel,handleEdit,index} = props
  
    return (
         <li className='todoItem'>
            <div className='actionsContainer'>
            <button onClick={()=> {
              handleDel(index)
            }}>
            <i className="fa-solid fa-minus"></i>
            </button>
            <button onClick={()=>{
              handleEdit(index)
            }}>
            <i className="fa-solid fa-pen-to-square"></i>
            </button>
            </div>
            {children}
        </li>
  )
}
