// @flow
import * as React from "react";
import { Button } from "./Button";
import CheckCircle from './check-circle.svg';
export default function Stage4() {
  return (
    <div className="stage">
      <div className="stageMessage">
      <div style={{'-webkit-mask': "url("+CheckCircle+") no-repeat",}} className="final-check"/>
        <div className="main">Congratulations,Eden!</div>
        <div className="sub">
          You have completed onboarding,you can start using the Eden!
        </div>
      </div>
     
      <Button name={"Launch Eden"}></Button>
    </div>
  );
}
