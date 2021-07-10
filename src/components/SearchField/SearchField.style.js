import styled from "styled-components";

export const CustomForm = styled.form`
    position: relative;
`;

export const CustomInput = styled.input`
    width: ${({ isActive }) => isActive ? "360px" : "32px"};
    height: 32px;
    background: none;
    border-radius: ${({ isActive }) => isActive ? "0" : "50%"};;
    border: 4px solid #000;
    box-sizing: border-box;
    outline: none;
    padding: ${({ isActive }) => isActive ? "0 15px" : "0px"};
    ${({ isActive }) => isActive && "padding-right: 40px;"};
    transition: width 0.4s ease-in-out, border-radius 0.4s ease-in-out, padding 0.8s;
    ${({ isActive }) => isActive && "transition-delay: 0.4s;"};
    
`;

export const CustomButton = styled.button`
  position: relative;
  width: ${({ isActive }) => isActive ? "24px" : "60px"};
  height: ${({ isActive }) => isActive ? "24px" : "60px"};
  top: -4px;
  right: 30px;
  box-sizing: border-box;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  transition: 0.3s;
  &:before {
    content: "";
    width: 4px;
    height: 25px;
    background: black;
    position: absolute;
    transform: ${({ isActive }) => isActive ? "rotate(45deg)" : "rotate(-45deg)"};
    bottom: ${({ isActive }) => isActive ? "1px" : "-5px"};
    right: ${({ isActive }) => isActive ? "8px" : "22px"};
    transition: 0.3s;
  }
    &: after {
        content: "";
        width: ${({ isActive }) => isActive ? "4px" : "0"};
        height: ${({ isActive }) => isActive ? "25px" : "0"};
        background: black;
        position: absolute;
        transform: rotate(-45deg);
        bottom: 1px;
        left: 12px;
        transition: 0.3s;
  }

  
`;
