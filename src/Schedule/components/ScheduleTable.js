import { Table, TableHead, TableData } from "../../Standings/styles/Standings.style";

const ScheduleTable = ({schedule, date}) => {
    return (
        <Table>
            <caption>{date}</caption>
            <thead>
                <TableHead>Teams</TableHead>
                <TableHead>Time</TableHead>
            </thead>
            <tbody>
                {schedule.map((item) => <TableRow item={item} />)}
            </tbody>
        </Table>
    )
}


const TableRow = (({item}) => (
    <tr>
        <TableData>{item["Teams"]}</TableData>
        <TableData>{item["Time"]}</TableData>
    </tr>
))

export default ScheduleTable;