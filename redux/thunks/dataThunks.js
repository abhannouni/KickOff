import API from '../../api/data';
import { fetchMatches, fetchMatchesrequest, fetchMatchesfailure,fetchMatchDetails, fetchMatchDetailsRequest  } from '../action';


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
        dispatch(fetchMatchDetails(response.data));
    } catch (error) {
        dispatch(fetchMatchDetailsfailure(error));
    }
}