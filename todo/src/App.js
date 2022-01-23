import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  
  const onChange = (e)=> setToDo(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    if(toDo === ""){
      return;
    }
    setToDos(currentArray => [toDo, ...currentArray])
    setToDo("");
  }

  return (
    <div>
      <h1>My To Do ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} type="text" placeholder="Write your to do..." />
        <button>Add To Do</button>
      </form>
      <hr/>
      {toDos.map((todoitem,index)=> 
        <li key={index}>{todoitem}</li>)}
    </div>
    );
}

export default App;
