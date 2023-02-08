import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { count, decrement, increment, addBy10, removeBy10, addByValue, removeByValue } from "./store/slice";

function App() {
  const countNumber = useSelector(count)
  const dispatch = useDispatch()
  const [addByValueState, setAddByValueState] = useState('0')
  const [removeByValueState, setRemoveByValueState] = useState('0')
  const addByValueHandler=()=>{
    dispatch(addByValue(Number(addByValueState) | 0))
  }
  const removeByValueHandler=()=>{
    dispatch(removeByValue(Number(removeByValueState) | 0))
  }
  return (
    <div>
      <h1>
        Counter App
      </h1>
      <h2>
        {countNumber}
      </h2>
      <button onClick={()=>dispatch(increment())}>++</button>
      <button onClick={()=>dispatch(decrement())}>--</button>
      <button onClick={()=>dispatch(addBy10())}>+10</button>
      <button onClick={()=>dispatch(removeBy10())}>-10</button>
      <br></br>
      <br></br>
      <br></br>
      <input type="text" id="addByValue"  onChange={e=>setAddByValueState(e.target.value)} style={{width: 75}} placeholder="add"/>
      <button onClick={addByValueHandler}>Add</button>
      <br></br>
      <br></br>
      <br></br>
      <input type="text" id="removeByValue" style={{width: 75}}  onChange={e=>setRemoveByValueState(e.target.value)} placeholder="remove"/>
      <button onClick={removeByValueHandler}>Remove</button>
    </div>
  );
}

export default App;
