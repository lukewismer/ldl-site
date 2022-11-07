
const StandingsHeader = ({conference}) => {
    if (conference)
    {
        return (
            <h1>Campbell Conference</h1>
        )
    }
    else
    {
        return (
            <h1>Deboer Conference</h1>
        )
    }
}

export default StandingsHeader;