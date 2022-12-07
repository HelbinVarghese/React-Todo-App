import './App.css';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState('')

//Delete Todo Function
  const deletetodo = (index)=>{
          let newList=todos;
          newList.splice(index,1)
          setTodos([...todos])
  }

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={todo} onChange={(e) => setTodo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={() => setTodos([...todos,{id:Date.now(),text:todo,status:false} ])} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {
          todos.map((value,index) => {

            return (<div className="todo">
              <div className="left">
                <input onChange={(e)=>{
                  setTodos(todos.filter(obj2=>{
                    if(obj2.id===value.id){
                      obj2.status=e.target.checked
                    }
                    return obj2
                  }))
                }} value={value.status} type="checkbox" name="" id="" />
                <p>{value.text}</p>
              </div>
              <div className="right">
                <i onClick={()=>deletetodo(index)} className="fas fa-times"></i>
              </div>
            </div>)

          })

        }
     

        {
          todos.map((values)=>{
            if(values.status){
              return(
                <h1>{values.text}</h1>
              )
            }
            return(null)
          })
        }
      </div>
    </div>
  )

}

export default App;
