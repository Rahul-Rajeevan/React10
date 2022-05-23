import React from 'react'
import styles from "./Todo.module.css" 
const TodoItem = ({value,id,yesDelete}) => {
  return (
    <>
    <li className={styles.q4}>{value}
    <button onClick={()=>yesDelete(id)}>DELETE</button></li>
    <br/>
    </>
    
  )
}

export default TodoItem