import { useSortBy, useTable } from "react-table";
import { useMemo } from "react";
import { Table, TableData, TableHead, TableDataGold, TableDataSilver, TableDataBronze } from "../styles/Standings.style";


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
                                if (cell.row.values["teamName"] !== '')
                                {
                                    if (cell.row.index == 0)
                                    {
                                        return <TableDataGold {...cell.getCellProps()}>{cell.render("Cell")}</TableDataGold>;
                                    } else if (cell.row.index == 1) {
                                        return <TableDataSilver {...cell.getCellProps()}>{cell.render("Cell")}</TableDataSilver>;
                                    } else if (cell.row.index == 2) {
                                        return <TableDataBronze {...cell.getCellProps()}>{cell.render("Cell")}</TableDataBronze>;
                                    } else {
                                        return <TableData {...cell.getCellProps()}>{cell.render("Cell")}</TableData>;
                                    }
                                }
                                
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </Table>
    );
}


export default StandingsTable;