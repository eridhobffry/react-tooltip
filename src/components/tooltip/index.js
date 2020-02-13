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
  const { children, position, inside, trigger } = props;

  const hideTooltip = () => {
    setDisplayTooltip(false);
  };

  const showTooltip = () => {
    setDisplayTooltip(true);
  };

  return (
    <TooltipSpan onMouseLeave={hideTooltip}>
      {displayTooltip && (
        <TooltipBubble>
          <ThePositionGoesTo position={position}>
            <TooltipMessage>{inside}</TooltipMessage>
          </ThePositionGoesTo>
        </TooltipBubble>
      )}
      <TooltipTrigger onMouseOver={showTooltip}>{trigger}</TooltipTrigger>
    </TooltipSpan>
  );
};

export default TooltipComponent;
