import { Header } from "../styles/Standings.style";

const StandingsHeader = ({conference}) => {
    if (conference)
    {
        return (
            <Header>Campbell Conference</Header>
        )
    }
    else
    {
        return (
            <Header>Deboer Conference</Header>
        )
    }
}

export default StandingsHeader;