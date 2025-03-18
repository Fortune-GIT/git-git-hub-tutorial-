import './App.css';
import Todo from "./components/Todo.jsx";
import TodoTitle from "./components/TodoTitle.jsx";
import Popup from "./components/Popup.jsx";

function App() {

  return (
    <>
    <TodoTitle/>
    <Todo task="learn react"/> 
    <Todo task="finish asap front end"/>
    <Todo task="land a junior job"/>
    <Todo task="earn 100k"/>
    {/* <Popup/> */}
    </>
  );
}

export default App;
