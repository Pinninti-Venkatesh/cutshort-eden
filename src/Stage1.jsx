// @flow
import * as React from "react";
import { Button } from "./Button";
import TextInput from "./textInput";

export default function Stage1({changeStage}) {
  return (
    <div className="stage">
      <div className="stageMessage">
        <div className="main">Welcome! First things first...</div>
        <div className="sub">You can always change them</div>
      </div>
      <TextInput name="fullName" label="Full Name" placeholder="Steve Jobs"></TextInput>
      <TextInput name="displayName" label="Display Name" placeholder="Steve"></TextInput>
      <Button name={"Create Workspace"} clickHandler={changeStage}></Button>
    </div>
  );
}
