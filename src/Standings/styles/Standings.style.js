import styled from 'styled-components';

export const Table = styled.table`
    border-collapse: collapse;
    max-width: 900px;
    width: 100%;
    margin: 2rem auto;
`;

export const TableHead = styled.th`
    border: 1px solid #ddd;
    padding: 8px;
`;

export const TableData = styled.td`
    border: 1px solid #ddd;
    padding: 8px;
    text-align: center;
`;

export const TableDataGold = styled.td`
    border: 1px solid #ddd;
    padding: 8px;
    text-align: center;
    background-color: gold;
`;

export const TableDataSilver = styled.td`
    border: 1px solid #ddd;
    padding: 8px;
    text-align: center;
    background-color: silver;
`;

export const TableDataBronze = styled.td`
    border: 1px solid #ddd;
    padding: 8px;
    text-align: center;
    background-color: #CD7F32;
`;

export const Header = styled.h3`
    text-align: center;
    font-size: 3rem;
`
export const Button = styled.div`
    padding-top: 1rem;
    text-align: center;
    
`
export const ButtonStyle = styled.button`
    border: none;
    color: white;
    padding: .7rem .7rem;
    text-align: center;
    display: inline-block;
    font-size: 16px;
    border-radius: 10px;
    background-color: #990f02;
    
    &:hover {
        background-color: #FFCCCB;
        color: black;
        border-radius: 10px;
    }
`