import styled, { keyframes } from "styled-components";

const kenburnsAnimation = keyframes`

  0% {
    background-position: 100% 0%;
  }
  100% {
    background-position: 0% 30%;
  }

 `;

export const HeroImage = styled.div`
  background-image: url("${(props) => props.heroImage}");
  background-repeat: no-repeat;
  background-size: cover;
  height: 50vh;
  clip-path: ${(props) => props.heroImage == "/assets/Hero.jpg" ? props.theme.heroImage : "none" };
  box-shadow: 0 0 6rem 7rem #0b0719 inset;
  opacity: ${(props) => props.theme.heroOpacity};
  animation: ${kenburnsAnimation} 5s ease-out both;
  position: relative;
  z-index: 99;
`;
