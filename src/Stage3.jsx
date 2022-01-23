// @flow
import * as React from "react";
import { Button } from "./Button";

import { Card } from "./Card";
import PlanSelector from "./PlanSelector";
export default function Stage3({changeStage}) {
  return (
    <div className="stage">
      <div className="stageMessage">
        <div className="main">How are you planning to use Eden?</div>
        <div className="sub">
          We'll streamline your setup experience accordingly
        </div>
      </div>
      <PlanSelector></PlanSelector>
      <Button name={"Create Workspace"} clickHandler={changeStage}></Button>
    </div>
  );
}
