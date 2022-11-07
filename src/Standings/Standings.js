import Navbar from "../Home/components/Navbar";
import React, { useEffect, useState} from 'react';
import StandingsTable from "./components/StandingsTable";
import { getStandings } from "../Services/StandingsService";
import StandingsHeader from "./components/StandingsHeader";

const Standings = () => {

    const [standings, setStandings] = useState([]);
    const [conference, setConference] = useState(true);

    useEffect(() => {
        console.log("fired");
        getStandings()
            .then(resStandings => {
                console.log("resStandigns ", resStandings);
                if (conference)
                {
                    setStandings(resStandings["Campbell"].filter(e => e));
                }
                else 
                {
                    setStandings(resStandings["Deboer"].filter(e => e));
                }
            });
    }, [conference])
    
    console.log("standings ", standings)
    
    var tableData = standings
    return (
        <>
            <Navbar />
            
            <StandingsHeader conference={conference} />

            <button onClick={() => setConference(!conference)}>
                Switch Conference
            </button>
            
            <StandingsTable standingsData={tableData}/>
        </>
    );
}


export default Standings;