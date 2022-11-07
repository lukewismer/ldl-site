import styled from 'styled-components';


export const NavContainer = styled.div`
    width: 100%;
    overflow: hidden;
    background-color: #990f02;
    display: flex;
    justify-content: center;
`;

export const NavItem = styled.a`
    float: left;
    display: block;
    color: white;
    text-align: center;
    padding: 16px 30px;
    text-decoration: none;
    font-size: 17px;

    &:hover {
        background-color: #FFCCCB;
        color: black;
        border-radius: 10px;
    }
`;


