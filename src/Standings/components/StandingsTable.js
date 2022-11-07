import { useSortBy, useTable } from "react-table";
import { useMemo } from "react";
import { Table, TableData, TableHead } from "../styles/Standings.style";


const StandingsTable = ({ standingsData }) => {

    const data = useMemo(() => [...standingsData], [standingsData]);

    const columns = useMemo(() => ([
        {
            Header: "Name",
            accessor: "teamName"
        },
        {
            Header: "Record",
            accessor: "record"
        },
        {
            Header: "Points",
            accessor: "points"
        }
        
    ]
    ), []);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = useTable({
        columns,
        data
    }, useSortBy);

    return (
        <Table {...getTableProps()}>
            <thead>
                {headerGroups.map((headerGroup,) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <TableHead {...column.getHeaderProps(column.getSortByToggleProps())}>
                                {column.render("Header")}
                                {column.isSorted ? (column.isSortedDesc ? " ⌄" : " ^") : ""}
                            </TableHead>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row) => {
                    prepareRow(row);

                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return <TableData {...cell.getCellProps()}>{cell.render("Cell")}</TableData>;
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </Table>
    );
}


export default StandingsTable;