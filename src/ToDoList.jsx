import React from "react";

const ToDoList = (props) => {

    

    
    return (
        <>
            <div className="todo_style">
            <button className="fa fa_times "onClick={() => {
                props.onSelect(props.id )
            }}>-</button>
                <li> {props.text}</li>
                
            </div>
        </>
            );

};

            export default ToDoList;