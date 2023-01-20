import styled from 'styled-components';

export const Header = styled.h3`
    text-align: center;
    font-size: 3rem;
`;

export const WeekDiv = styled.div`
    text-align: center;
`;


export const WeekBtn = styled.button`
    background-color: #990f02;
    color: white;
    border: none;
    padding: .7rem .7rem;
    font-size: 16px;
    border-radius: 10px;
    display: inline-block;
    

    &:hover {
        background-color: #FFCCCB;
        color: black;
        border-radius: 10px;
    }
`;

export const DropdownMenu = styled.div`
    display: none;
    position: relative;
    background-color: lightgray;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;

    ${WeekDiv}:hover & {
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
`;

export const DropdownItem = styled.a`
    color: black;
    position: relative;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: center;

    &:hover {
        background-color: #FFCCCB;
    }
`;