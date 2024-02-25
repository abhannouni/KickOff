export const fetchMatches = (matches) => {
    return {
        type: "FETCH_MATCHES",
        payload: matches,
    };
};

export const fetchMatchesrequest = () => {
    return {
        type: "FETCH_MATCHES_REQUEST",
    };
};

export const fetchMatchesfailure = (error) => {
    return {
        type: "FETCH_MATCHES_FAILURE",
        payload: error,
    };
}

export const fetchMatchDetails = (matchDetails) => {
    return {
        type: "FETCH_MATCH_DETAILS",
        payload: matchDetails,
    };
};

export const fetchMatchDetailsRequest = () => {
    return {
        type: "FETCH_MATCH_DETAILS_REQUEST",
    };
}

export const fetchMatchDetailsFailure = (error) => {
    return {
        type: "FETCH_MATCH_DETAILS_FAILURE",
        payload: error,
    };
}

export const fetchPlayers = (players) => {
    return {
        type: "FETCH_PLAYERS",
        payload: players,
    };
}

export const fetchPlayersRequest = () => {
    return {
        type: "FETCH_PLAYERS_REQUEST",
    };
}

export const fetchPlayersFailure = (error) => {
    return {
        type: "FETCH_PLAYERS_FAILURE",
        payload: error,
    };
}

export const addFavorite = (favorite) => {
    return {
        type: "ADD_FAVORITE",
        payload: favorite,
    };
}

export const removeFavorite = (id) => {
    return {
        type: "REMOVE_FAVORITE",
        payload: id,
    };
}
export const fetchMatchesLive = (matches) => {
    return {
        type: "FETCH_MATCHES_LIVE",
        payload: matches,
    };
}

export const fetchMatchesrequestLive = () => {
    return {
        type: "FETCH_MATCHES_REQUEST_LIVE",
    };
}

export const fetchMatchesfailureLive = (error) => {
    return {
        type: "FETCH_MATCHES_FAILURE_LIVE",
        payload: error,
    };
}