// @flow
import * as React from "react";
import { Button } from "./Button";
import TextInput from "./textInput";

export default function Stage2({changeStage}) {
  return (
    <div className="stage">
      <div className="stageMessage">
        <div className="main">Let's set up a home for all your work</div>
        <div className="sub">
          You can always create another workspace later.
        </div>
      </div>
      <TextInput
        name="fullName"
        label="Full Name"
        placeholder="Steve Jobs"
      ></TextInput>
      <div className="input-control">
        <label for="url">
          Workspace URL<span>(optional)</span>
        </label>
        <div className="url-control"><input className="domain" disabled placeholder="www.eden.com/"></input><input className="url-input" type="text" name="url" id="" placeholder={"Example"} /></div>
      </div>
      <Button name={"Create Workspace"} clickHandler={changeStage}></Button>
    </div>
  );
}
