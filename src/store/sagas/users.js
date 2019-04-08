import { call, put, select } from "redux-saga/effects";
import api from "../../services/api";

import { Creators as UserActions } from "../ducks/users";

export function* addUser(action) {
  try {
    const { data } = yield call(api.get, `/users/${action.payload.user}`);
    const isDuplicated = yield select(state =>
      state.users.data.find(user => user.id === data.id)
    );

    if (isDuplicated) {
      yield put(UserActions.addUserFailure("Usuário já existente no mapa!"));
    } else {
      const userData = {
        id: data.id,
        name: data.name,
        login: data.login,
        avatar: data.avatar_url,
        latitude: action.payload.coords[1],
        longitude: action.payload.coords[0]
      };
      yield put(UserActions.addUserSuccess(userData));
    }
  } catch (err) {
    yield put(UserActions.addUserFailure("Usuário inexistente!"));
  }
}
