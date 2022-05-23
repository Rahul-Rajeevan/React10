import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({list,yesDelete}) => {
  return (
    <ul>
      {list.map((e)=><TodoItem value={e.value} id={e.id}  yesDelete={yesDelete}/>)}
    </ul>
  )
}

export default TodoList