import styled from "styled-components";
import { devices } from './Responsive';

export const TittleNav = styled.h1`
    color: #fff ;
    font-size: 3rem;
    text-shadow: 0px 0px 15px rgb(250 250 250 / 96%);
    @media ${devices.tablet} {
      font-size: 2rem;
    }

  `;