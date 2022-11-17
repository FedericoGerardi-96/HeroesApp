import styled from "styled-components";

export const HamburgerIcon = styled.div`
  position: relative;
  height: 60px;
  width: 60px;
  top: 10%;
  left: 3%;
  z-index: 1000;
  cursor: pointer;
  border-radius: 50%;
  transition: all 0.2s ease-in-out;
  background: #c4b6f2;
  &:hover {
    transform: scale(1.2);
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
  }
`;
export const Icon1 = styled.div`
  transform: translateY(-8px);
  animation-delay: 100ms;
  position: absolute;
  left: 25%;
  top: 50%;
  width: 32px;
  height: 3px;
  background-color: black;
  transition: all 400ms cubic-bezier(0.84, 0.06, 0.52, 1.8);
  transform: ${(props) => (props.humburgerState ? "rotate(40deg)" : "")};
`;
export const Icon2 = styled.div`
  position: absolute;
  left: 25%;
  top: 50%;
  width: 32px;
  height: 3px;
  background-color: black;
  transition: all 400ms cubic-bezier(0.84, 0.06, 0.52, 1.8);
  opacity: ${(props) => (props.humburgerState ? "0" : "1")};
`;
export const Icon3 = styled.div`
  position: absolute;
  left: 25%;
  top: 50%;
  width: 32px;
  height: 3px;
  background-color: black;
  transition: all 400ms cubic-bezier(0.84, 0.06, 0.52, 1.8);
  transform: translateY(8px);
  animation-delay: 250ms;
  transform: ${(props) => (props.humburgerState ? "rotate(-40deg)" : "")};
`;
export const Clear = styled.div`
  clear: both;
`;
