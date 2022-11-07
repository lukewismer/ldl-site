import Navbar from "../Home/components/Navbar";
import React, { useEffect, useState} from 'react';
import { getSchedule } from "../Services/ScheduleService";
import ScheduleTable from "./components/ScheduleTable";

const Schedule = () => {

    const [schedule, setSchedule] = useState([]);
    const [dates, setDates] = useState([]);

    useEffect(() => {
        console.log("fired");
        getSchedule()
            .then(res => {
                console.log("schedule ", res);
                let resDates = [];
                let resSchedule = [];
                for (var key of Object.keys(res))
                {
                    resDates.push(key);
                    resSchedule.push(res[key]);
                }
                setDates(resDates)
                setSchedule(resSchedule);
            });
    }, [])
    
    console.log(schedule[0]);
    console.log(dates[0]);

    return (
        <>
            <Navbar />
            <h1>Week 15</h1>
            {dates.map((item, index) => {
                return (
                    <ScheduleTable schedule={schedule[index]} date={dates[index]}></ScheduleTable>
                )
            })}
        </>
    );
}

export default Schedule;
