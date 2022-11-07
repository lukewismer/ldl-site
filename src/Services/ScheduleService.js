import axios from 'axios';

export async function getSchedule() {
    try {
        const response = await axios.get("https://ldlbackend-default-rtdb.firebaseio.com/schedule.json");
        console.log('response ', response);
        return response.data;
    } catch (error)
    {
        console.log(error)
        return [];
    }
}