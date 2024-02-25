import APIPLAYER from '../../api/Player';
import API from '../../api/data';
import { fetchMatches, fetchMatchesrequest, fetchMatchesfailure,fetchMatchDetails, fetchMatchDetailsRequest, fetchMatchDetailsfailure, fetchPlayersRequest, fetchPlayers, fetchPlayersFailure  } from '../action';


export const fetchMatchesThunk = (date) => async (dispatch) => {
    try {
        dispatch(fetchMatchesrequest());
        const response = await API.get(`sport/football/scheduled-events/${date}`);
        dispatch(fetchMatches(response.data));
    } catch (error) {
        dispatch(fetchMatchesfailure(error));
    }
}

export const fetchMatchDetailsThunk = (id) => async (dispatch) => {
    try {
        dispatch(fetchMatchDetailsRequest());
        const response = await API.get(`/event/${id}`);
        const incidents = await API.get(`event/${id}/incidents`);
        response.data.event.incidents = incidents.data.incidents;
        dispatch(fetchMatchDetails(response.data));
    } catch (error) {
        dispatch(fetchMatchDetailsfailure(error));
    }
}

export const fetchPlayersThunk = () => async (dispatch) => {
    try {
        dispatch(fetchPlayersRequest);
        const response = await APIPLAYER.get();
        dispatch(fetchPlayers(response.data));
    } catch (error) {
        dispatch(fetchPlayersFailure(error));
    }
}