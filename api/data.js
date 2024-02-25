const ApiMatch = "https://api.sofascore.com/api/v1" 

import axios from 'axios';

export default axios.create({
    baseURL: ApiMatch,
    headers: {
        "Content-type": "application/json"
    }
});
