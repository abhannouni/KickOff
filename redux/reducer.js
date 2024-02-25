


const initialState = {
    matches: [],
    matchDetails: {},
    selectedLeague: 'All',
    searchQuery: '',
    leagues: [],
    loading: false,
    error: null,
}

const rootreducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_MATCHES':
            return {
                ...state,
                matches: action.payload,
                loading: false,
            }
        case 'FETCH_MATCHES_REQUEST':
            return {
                ...state,
                loading: true,
            }
        case 'FETCH_MATCHES_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        case 'FETCH_MATCH_DETAILS':
            console.log(action.payload);
            return {
                ...state,
                matchDetails: action.payload,
                loading: false,
            }
        case 'FETCH_MATCH_DETAILS_REQUEST':
            return {
                ...state,
                loading: true,
            }
        case 'FETCH_MATCH_DETAILS_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        default:
            return state;
    }
}

export default rootreducer;

