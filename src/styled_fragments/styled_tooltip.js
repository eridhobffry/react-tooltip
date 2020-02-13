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
  bottom: ${props => (props.position === typePosition.top ? "100%" : "0")};
  top: ${props => {
    switch (props.position) {
      case typePosition.bottom:
        return "100%";
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
        return "100%";
      case typePosition.top:
        return "50%";
      case typePosition.bottom:
        return "50%";
      default:
        return "unset";
    }
  }};
  right: ${props => (props.position === typePosition.left ? "100%" : "unset")};
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
        return "";
    }
  }};

  &::after {
    border-right: 9px solid rgba(0, 0, 0, 0.7);
    border-top: 9px solid transparent;
    border-bottom: 9px solid transparent;
    bottom: ${props => (props.position === typePosition.top ? "0" : "unset")};
    left: ${props => {
      switch (props.position) {
        case typePosition.right:
          return "0";
        case typePosition.top:
          return "50%";
        case typePosition.bottom:
          return "50%";
        default:
          return "unset";
      }
    }};
    right: ${props => (props.position === typePosition.left ? "0" : "unset")};
    top: ${props => {
      switch (props.position) {
        case typePosition.bottom:
          return "0";
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
