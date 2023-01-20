import Navbar from "../Home/components/Navbar";
import React, { useEffect, useState} from 'react';
import { getSchedule } from "../Services/ScheduleService";
import ScheduleTable from "./components/ScheduleTable";
import { Header, WeekBtn, WeekDiv, DropdownMenu, DropdownItem } from "./styles/Schedule.style";

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
    

    // Need to receive which week it is somehow

    return (
        <>
            <Navbar />
            <Header>Week 11</Header>
            <hr />
            <WeekDiv>
                <WeekBtn>Other Weeks</WeekBtn>
                <DropdownMenu>
                    <DropdownItem href="#">Line 1</DropdownItem>
                    <DropdownItem href="#">Link 2</DropdownItem>
                </DropdownMenu>
            </WeekDiv>
            {dates.map((item, index) => {
                return (
                    <ScheduleTable schedule={schedule[index]} date={dates[index]}></ScheduleTable>
                )
            })}
        </>
    );
}

export default Schedule;
