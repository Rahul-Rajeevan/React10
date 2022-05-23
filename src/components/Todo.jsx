import React from 'react'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import styles from "./Todo.module.css"

const Todo = () => {
    let [list,setList]=useState([]);
    let listFn=(value)=>setList([...list,{id:uuidv4(),value:value}]);
    const yesDelete=(id)=>{let newList=list.filter((g)=>g.id!==id);
    setList(newList);}
    return (
    <div className={styles.q1}>
        <div className={styles.q2}><TodoInput listFn={listFn}/>
        <TodoList list={list} yesDelete={yesDelete}/></div>
    </div>
  )
}

export default Todo