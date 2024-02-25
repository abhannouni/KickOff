import Favorite from "../screens/Favorite"



const initialState = {
    matches: [],
    matchDetails: {},
    players: [],
    selectedDiff: 'All',
    searchQuery: '',
    leagues: [],
    Favorites: [],
    loading: false,
    error: null,
}

const rootreducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_MATCHES':
            return {
                ...state,
                matches: action.payload,
                selectedDiff: 'All',
                loading: false,
            }
        case 'FETCH_MATCHES_LIVE':
            return {
                ...state,
                matches: action.payload,
                selectedDiff: 'Live',
                loading: false,
            }
        case 'FETCH_MATCHES_REQUEST_LIVE':

            return {
                ...state,
                matches: [],
                loading: true,
            }
        case 'FETCH_MATCHES_FAILURE_LIVE':
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        case 'FETCH_MATCHES_REQUEST':
            return {
                ...state,
                matches: [],
                loading: true,
            }
        case 'FETCH_MATCHES_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        case 'FETCH_MATCH_DETAILS':
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
        case 'FETCH_PLAYERS':
            return {
                ...state,
                players: action.payload,
                loading: false,
            }
        case 'FETCH_PLAYERS_REQUEST':
            return {
                ...state,
                loading: true,
            }
        case 'FETCH_PLAYERS_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        case 'ADD_FAVORITE':
            if (state.Favorites.includes(action.payload)) {
                return state;
            }
            return {
                ...state,
                Favorites: [...state.Favorites, action.payload],
            }
        case 'REMOVE_FAVORITE':
                return {
                    ...state,
                    Favorites: state.Favorites.filter((item) => item.id !== action.payload),
                }
        default:
            return state;
    }
}

export default rootreducer;

