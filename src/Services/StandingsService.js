import axios from 'axios';

export async function getStandings() {
    try {
        const response = await axios.get("https://ldlbackend-default-rtdb.firebaseio.com/standings.json");
        console.log('response ', response);
        return response.data;
    } catch (error)
    {
        console.log(error)
        return [];
    }
}
