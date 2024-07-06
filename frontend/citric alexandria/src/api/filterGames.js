import axios from 'axios';
import { URLBACKEND } from '../App';
// import datagames from"../../../../backend/data/proto/data.json"
export function filterDuplicates(data) {
    const nameSet = new Set();
    const idSet = new Set();
    const filteredData = [];

    data.forEach(item => {
        if (!nameSet.has(item.name) && !idSet.has(item.id)) {
            nameSet.add(item.name);
            idSet.add(item.id);
            filteredData.push(item);
        }
    });

    return filteredData;
}

export async function getFilteredGames() {
    try {
        const response = await axios.get(URLBACKEND+"datagames/api/games/"); 
        const games = response.data;
        const filteredGames = filterDuplicates(games);
        return filteredGames;
    } catch (error) {
        console.error('Error fetching games:', error);
        return [];
    }
}
