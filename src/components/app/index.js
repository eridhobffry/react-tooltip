import React from "react";
import TooltipComponent from "../tooltip";

const App = () => {
  const ListInside = () => (
    <ul>
      <li>hallo</li>
      <li>this is</li>
      <li>menu</li>
    </ul>
  );

  return (
    <div className="container">
      <p>
        Here is a{" "}
        <TooltipComponent
          inside={<ListInside />}
          trigger={"Tooltip"}
          position={"top"}
        />{" "}
        on top
      </p>
      <p>
        Here is a{" "}
        <TooltipComponent
          inside={<ListInside />}
          trigger={"Tooltip"}
          position={"right"}
        />{" "}
        on right
      </p>
      <p>
        Here is a{" "}
        <TooltipComponent
          inside={<ListInside />}
          trigger={"Tooltip"}
          position={"bottom"}
        />{" "}
        on bottom
      </p>
      <p>
        Here is a{" "}
        <TooltipComponent
          inside={<ListInside />}
          trigger={"Tooltip"}
          position={"left"}
        />{" "}
        on left
      </p>
    </div>
  );
};

export default App;
