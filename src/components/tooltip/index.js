import React, { useState } from "react";
import {
  TooltipBubble,
  ThePositionGoesTo,
  TooltipMessage,
  TooltipSpan,
  TooltipTrigger
} from "../../styled_fragments/styled_tooltip";

const TooltipComponent = props => {
  const [displayTooltip, setDisplayTooltip] = useState(false);
  const { position, inside, trigger } = props;

  const hideTooltip = () => {
    setDisplayTooltip(false);
  };

  const showTooltip = () => {
    setDisplayTooltip(true);
  };

  return (
    <TooltipSpan onMouseLeave={hideTooltip}>
      {displayTooltip && (
        <ThePositionGoesTo position={position} className="tooltip-bubble">
          <TooltipMessage>{inside}</TooltipMessage>
        </ThePositionGoesTo>
      )}
      <TooltipTrigger onMouseOver={showTooltip}>{trigger}</TooltipTrigger>
    </TooltipSpan>
  );
};

export default TooltipComponent;
