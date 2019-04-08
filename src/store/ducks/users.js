import { id } from "postcss-selector-parser";

export const Types = {
  ADD_REQUEST: "users/ADD_REQUEST",
  ADD_SUCCESS: "users/ADD_SUCCESS",
  ADD_FAILURE: "users/ADD_FAILURE",
  DELETE_USER: "users/DELETE_USER"
};

const INITIAL_STATE = {
  loading: false,
  data: [],
  error: null
};

export default function users(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return { ...state, loading: true };
    case Types.ADD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: [...state.data, action.payload.data]
      };
    case Types.ADD_FAILURE:
      return { ...state, loading: false, error: action.payload.error };
    case Types.DELETE_USER:
      return {
        ...state,
        data: state.data.filter(user => user.id !== action.payload.id)
      };
    default:
      return state;
  }
}

export const Creators = {
  addUserRequest: (user, coords) => ({
    type: Types.ADD_REQUEST,
    payload: { user, coords }
  }),

  addUserSuccess: data => ({
    type: Types.ADD_SUCCESS,
    payload: { data }
  }),

  addUserFailure: error => ({
    type: Types.ADD_FAILURE,
    payload: { error }
  }),

  deleteUser: id => ({
    type: Types.DELETE_USER,
    payload: { id }
  })
};
