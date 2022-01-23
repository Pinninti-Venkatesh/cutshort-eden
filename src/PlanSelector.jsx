// @flow
import { useState } from "react";
import { Card } from "./Card";
import user from "./user.svg";
import team from "./teams.svg";
export default function PlanSelector() {
  const [mySelfActive, setActive] = useState(true);
  function selectCard(card) {
    if (card === "myself") {
      setActive(true);
    } else {
      setActive(false);
    }
  }
  return (
    <div className="usage">
      <Card
        image={user}
        title={"For myself"}
        description={"Write better.Think more clearly.Stay organized"}
        selected={mySelfActive}
        clickHandler={() => {
          selectCard("myself");
        }}
      ></Card>
      <Card
        image={team}
        title={"With my team"}
        description={"Wikis, docs, task&projects, all in one place."}
        selected={!mySelfActive}
        clickHandler={() => {
          selectCard("team");
        }}
      ></Card>
    </div>
  );
}
