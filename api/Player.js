const ApiPlayer = "https://www.footballtransfers.com/en/players/actions/overview/overview"

import axios from 'axios';

export default axios.create({
    baseURL: ApiPlayer,
    headers: {
        "Content-type": "application/json"
    }
});
