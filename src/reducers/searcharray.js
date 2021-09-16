import { initialState } from "../store";

const searcharrayReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ARRAY":
      return {
        ...state,
        companies: {
          ...state.companies,
          company: [...state.companies.company, action.payload],
        },
      };
    default:
      return state;
  }
};

export default searcharrayReducer;
