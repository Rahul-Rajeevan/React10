import React from 'react'
import { useState } from 'react'
import styles from "./Todo.module.css"

const TodoInput = ({listFn}) => {
  let [value,setValue]=useState("");
  const handle=(e)=>setValue(e.target.value)
  return (
    <div>
      <input className={styles.input} placeholder={"Write something"} value={value} onChange={handle}/>
        <button onClick={()=>{
            listFn(value);
            setValue("");
            }}>+</button>
    </div>
  )
}

export default TodoInput