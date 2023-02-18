import React , {useState} from "react";
import ToDoList from "./ToDoList"


const App = () => {
  const [inputList , setInputList] = useState(" ");
  const [items , setItems] = useState([]);
  
  const itemEvent = (event) => {
    setInputList(event.target.value);
  };
  const listOfItems = () => {
    setItems((olditems) => {
      return [...olditems , inputList];
    });
    setInputList("");   
    // taaki type karne k baad vo dubara empty ho jaaye

  };

  const deleteItems = (id) => {
    console.log("deleted");

    setItems((olditems) => {
      return olditems.filter((arrElem , index ) =>
      {
      return index !== id;
    });
    });
  };
  return(
    <>
      <div className="main_div">
      <div className="center_div">
        <h1>To Do List</h1>
        <br/>
        <input type="text" placeholder="Add An Item" onChange={itemEvent} value={inputList} />
        <button className="btn" onClick={listOfItems}> ++ </button>

        <ol>
          {items.map((itemval , index) => {
            return < ToDoList id={index} key={index} text={itemval} onSelect={deleteItems} />
          })}
        </ol>
      </div>

      </div>
    </>
  );

};

export default App;