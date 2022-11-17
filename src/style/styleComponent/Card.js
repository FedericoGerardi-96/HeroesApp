import styled from "styled-components";

export const Card = styled.div`
  width: 190px;
  height: 254px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(0,0,0,.2) !important;
  border-radius: 12px;
`;
export const Img = styled.div`
  height: 100px;
  margin-top: 1.6em;
  aspect-ratio: 1;
  border-radius: 30%;
  background: #f2f2f3;
  margin-bottom: 0.4em;
  box-shadow: ${(props) => props.theme.boxShadowCard};
  & img{
    object-fit: cover;
  }
`;
export const Info = styled.div`
  text-align: center;
  margin-top: 0.4em;
  background: linear-gradient(
    120deg,
    rgba(0, 194, 255, 1) 0%,
    rgba(0, 86, 255, 1) 100%
  );
  background-clip: border-box;
  -webkit-background-clip: text;
`;

