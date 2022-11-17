import styled from "styled-components";

export const A = styled.a`
    color: ${ props => props.theme.color} !important;
    text-decoration: none;
    cursor: pointer;
`;

export const H1 = styled.h1`
color: ${ props => props.theme.color} !important;
font-size: 3rem
`;

export const H4 = styled.h1`
color: ${ props => props.theme.color} !important;
font-size: 2.2rem
`;

export const SPAN = styled.span`
color: ${ props => props.theme.color} !important;
font-size: 1rem
`;

export const P = styled.p`
color: ${ props => props.theme.color} !important;
font-size: .8rem
`;
