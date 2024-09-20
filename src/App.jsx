import { useState } from "react";
import { useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const dataArr = [1, 2];

// const Card = () => {
//   return (
//     <>
//       {dataArr.map((data) => (
//         <div className="main__card">The data is{data}</div>
//       ))}
//     </>
//   );
// };

function App() {
  const [count, setCount] = useState(0);
  const inputRef = useRef();
  const [inputState, setInputState] = useState("");
  const [tasksArray, setTasksArray] = useState([]);
  const handleInputChange = () => {
    setInputState(inputRef.current.value);
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    console.log("Button Click");
    console.log(inputState);
    setTasksArray([...tasksArray, inputState]);
    console.log(tasksArray);
  };
  /**
   *
   * So add a new item
   * Remove an item
   * Update an item etc
   */

  return (
    <>
      <h1>React Todo List</h1>
      <h1>Enter an item to add</h1>

      <input
        type="text"
        placeholder="Enter the task"
        ref={inputRef}
        onChange={handleInputChange}
        className="main__input"
      />
      <button onClick={handleButtonClick}>Add item</button>
      {tasksArray.map((task, index) => (
        <div>
          <div className="main__card">
            {task}{" "}
            <button
              className="remove__btn"
              onClick={() => {
                console.log("Clicked me baby");
                console.log(index);
                tasksArray.splice(index, 1);
                const tasksCont = tasksArray;
                console.log(tasksArray);
                setTasksArray([...tasksArray]);
                // console.log("New tasks COnt is " + tasksCont);
                // setTasksArray[tasksCont];
              }}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default App;
