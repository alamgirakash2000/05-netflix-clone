export const initialState = {
  favorites: [],
  movieDetails: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_MOVIE":
      return {
        ...state,
        movieDetails: action.movie,
      };

    default:
      return state;
  }
};

export default reducer;
