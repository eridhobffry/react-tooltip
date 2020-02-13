import styled from "styled-components";
import { typePosition } from "./styled_constants";

export const TooltipSpan = styled.span`
  position: relative;
`;

export const TooltipTrigger = styled.span`
  display: inline-block;
  text-decoration: underline;
`;

export const TooltipBubble = styled.div`
  min-width: 120px;
  max-width: 210px;
  position: absolute;
  z-index: 10;

  &::after {
    content: "";
    position: absolute;
  }
`;

export const ThePositionGoesTo = styled.div`
  &.tooltip-bubble {
    min-width: 120px;
    max-width: 210px;
    position: absolute;
    z-index: 10;
    &::after {
      content: "";
      position: absolute;
    }
  }

  bottom: ${props => (props.position === typePosition.top ? "120%" : "unset")};
  top: ${props => {
    switch (props.position) {
      case typePosition.bottom:
        return "120%";
      case typePosition.left:
        return "50%";
      case typePosition.right:
        return "50%";
      default:
        return "unset";
    }
  }};
  left: ${props => {
    switch (props.position) {
      case typePosition.right:
        return "120%";
      case typePosition.top:
        return "50%";
      case typePosition.bottom:
        return "50%";
      default:
        return "unset";
    }
  }};
  right: ${props => (props.position === typePosition.left ? "120%" : "unset")};
  transform: ${props => {
    switch (props.position) {
      case typePosition.top:
        return "translateX(-50%)";
      case typePosition.bottom:
        return "translateX(-50%)";
      case typePosition.right:
        return "translateY(-50%)";
      case typePosition.left:
        return "translateY(-50%)";
      default:
        return "unset";
    }
  }};

  ::after {
    border-left: ${props => {
      switch (props.position) {
        case typePosition.top:
        case typePosition.bottom:
          return "9px solid transparent";
        case typePosition.left:
          return "9px solid rgba(0, 0, 0, 0.7)";
        default:
          return "unset";
      }
    }};
    border-right: ${props => {
      switch (props.position) {
        case typePosition.top:
        case typePosition.bottom:
          return "9px solid transparent";
        case typePosition.right:
          return "9px solid rgba(0, 0, 0, 0.7)";
        default:
          return "unset";
      }
    }};
    border-top: ${props => {
      switch (props.position) {
        case typePosition.top:
          return "9px solid rgba(0, 0, 0, 0.7)";
        case typePosition.right:
        case typePosition.left:
          return "9px solid transparent";
        default:
          return "unset";
      }
    }};
    border-bottom: ${props => {
      switch (props.position) {
        case typePosition.bottom:
          return "9px solid rgba(0, 0, 0, 0.7)";

        case typePosition.left:
        case typePosition.right:
          return "9px solid transparent";
      }
    }};
    bottom: ${props => (props.position === typePosition.top ? "-8%" : "unset")};
    left: ${props => {
      switch (props.position) {
        case typePosition.right:
          return "-8%";
        case typePosition.top:
          return "50%";
        case typePosition.bottom:
          return "50%";
        default:
          return "unset";
      }
    }};
    right: ${props => (props.position === typePosition.left ? "-8%" : "unset")};
    top: ${props => {
      switch (props.position) {
        case typePosition.bottom:
          return "-8%";
        case typePosition.left:
          return "50%";
        case typePosition.right:
          return "50%";
        default:
          return "unset";
      }
    }};
    transform: ${props => {
      switch (props.position) {
        case typePosition.top:
          return "translateX(-50%)";
        case typePosition.bottom:
          return "translateX(-50%)";
        case typePosition.right:
          return "translateY(-50%)";
        case typePosition.left:
          return "translateY(-50%)";
        default:
          return "unset";
      }
    }};
  }
`;

export const TooltipMessage = styled.div`
  background: rgba(0, 0, 0, 0.7);
  border-radius: 3px;
  color: #fff;
  font-size: 0.75rem;
  line-height: 1.4;
  padding: 0.75em;
  text-align: center;
`;
