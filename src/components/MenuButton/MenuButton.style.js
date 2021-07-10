import styled from "styled-components";

export const HamburguerContainer = styled.div`
  cursor: pointer;
  height: 48px;
  position: relative;
  transition: all 0.4s cubic-bezier(0, 0, 0, 1) 0s;
  user-select: none;
  width: 48px;
  outline: none;
  transform: ${({ isActive }) => isActive ? "rotate(90deg)" : "none"};
  &:after {
    box-sizing: border-box;
    border: 0 solid #edf2f7;
  }
  &:before {
    box-sizing: border-box;
    border: 0 solid #edf2f7;
  }
`;

export const HamburguerTopBar = styled.div`
  background: currentcolor;
  height: 3px;
  left: 6px;
  position: absolute;
  width: 36px;
  top: 12px;
  transition: all 0.4s cubic-bezier(0, 0, 0, 1) 0s;
  transform: ${({ isActive }) => isActive ? "rotate(45deg) translate(7.77px, 7.77px)" : "none"};
`;

export const HamburguerMiddleBar = styled.div`
  background: currentcolor;
  height: 3px;
  left: 6px;
  position: absolute;
  width: 36px;
  top: 23px;
  transition: all 0.4s cubic-bezier(0, 0, 0, 1) 0s;
  transform: ${({ isActive }) => isActive ? "scaleX(0)" : "none"};
`;

export const HamburguerBottomBar = styled.div`
  background: currentcolor;
  height: 3px;
  left: 6px;
  position: absolute;
  width: 36px;
  top: 34px;
  transition: all 0.4s cubic-bezier(0, 0, 0, 1) 0s;
  transform: ${({ isActive }) => isActive ? "rotate(-45deg) translate(7.77px, -7.77px)" : "none"};
`;
