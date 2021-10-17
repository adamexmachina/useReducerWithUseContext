import { ACTIONTYPE } from "../types/action-types";

export const viewReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case ACTIONTYPE.SETACTIVEVIEW:
      return {
        ...state,
        activeView: payload.activeView
      };
    case ACTIONTYPE.ISLOADING:
      return {
        ...state,
        isLoading: payload.isLoading
      };
    case ACTIONTYPE.UPDATEIMAGEURL:
      return {
        ...state,
        imageUrl: payload.imageUrl
      };
    default:
      return false;
  }
};
