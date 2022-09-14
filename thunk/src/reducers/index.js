import { FETCH_FAIL, FETCH_SUCCESSFUL, FETCH_START } from "../actions";

const initialState = {
  person: {
    name: {
      title: "Mr",
      first: "Silas",
      last: "Petersen"
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/70.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/70.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/70.jpg"
    }
  },
  isFetching: false,
  error: ''
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        isFetching: true
      }
    case FETCH_SUCCESSFUL:
      return {
        ...state,
        person: action.payload,
        fetching: false
      }
    case FETCH_FAIL:
      return {
        ...state,
        error: action.payload,
        fetching: false
      }
    default:
      return state;
  }
};