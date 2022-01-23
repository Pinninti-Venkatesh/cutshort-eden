import "./App.css";
import TextInput from "./textInput";
import logo from "./edenIcon.png";
import { useState } from "react";
import Stage1 from './Stage1';
import Stage2 from './Stage2';
import Stage3 from './Stage3';
import Stage4 from "./Stage4";
function App() {
  const [stage,setStage]=useState(1);
  function renderStage(stage){
    switch(stage){
      case 1:
        return <Stage1 changeStage={()=>{changeStage(2)}}></Stage1>;
      case 2:
        return <Stage2 changeStage={()=>{changeStage(3)}}></Stage2>;
      case 3:
        return <Stage3 changeStage={()=>{changeStage(4)}}></Stage3>;
      case 4:
        return <Stage4></Stage4>
    }
  }
  function changeStage(stageNum){
    setStage(stageNum);
  }
  return (
    <div className="App">
      <div className="title">
        <img src={logo}></img>
        <div className="title-name">Eden</div>
      </div>
      <ul class="progressbar">
        <li class={stage>=1?"active":""} onClick={()=>{changeStage(1)}}></li>
        <li class={stage>=2?"active":""}  onClick={()=>{changeStage(2)}}></li>
        <li class={stage>=3?"active":""}  onClick={()=>{changeStage(3)}}></li>
        <li class={stage>=4?"active":""}  onClick={()=>{changeStage(4)}}></li>
      </ul>
      {
        renderStage(stage)
      }
     {/* <Stage3></Stage3> */}
    </div>
  );
}

export default App;
