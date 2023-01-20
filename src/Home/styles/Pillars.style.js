import styled from "styled-components";


export const PillarsContainer = styled.div`
    background-color: #FFCCCB;
    margin: auto;
    margin-top: 10rem;
`;

export const PillarCard = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    padding: 16px;
    text-align: center;
    background-color: #d1d1d1;
    border-radius: 5%;
`;

export const PillarImage = styled.img`
    height: 18rem;
    width: 14rem;
    border-radius: 20%;
`;

export const PillarTitle = styled.h2`

`;

export const PillarHeader = styled.h1`
    text-align: center;
    padding: 15px;
`;

export const PillarRow = styled.div`
    margin: 0 -5px;
    padding-left: 3%;
    

    &:after {
        content: "";
        display: table;
        clear: both;
    }
`;

export const PillarCol = styled.div`
    float: left;
    width: 23%;
    padding: 0 10px;
`;