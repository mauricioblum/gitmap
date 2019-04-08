export const Types = {
  OPEN_MODAL: "modal/OPEN_MODAL",
  CLOSE_MODAL: "modal/CLOSE_MODAL"
};

const INITIAL_STATE = { open: false, coords: [] };

export default function modal(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.OPEN_MODAL:
      return { ...state, open: true, coords: action.payload.coords };
    case Types.CLOSE_MODAL:
      return { ...state, open: false };
    default:
      return state;
  }
}

export const Creators = {
  onOpenModal: coords => ({
    type: Types.OPEN_MODAL,
    payload: { coords }
  }),
  onCloseModal: modal => ({
    type: Types.CLOSE_MODAL
  })
};
