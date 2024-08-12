import {
  SET_CATEGORY_REQUEST,
  SET_CATEGORY_SUCCESS,
  SET_CATEGORY_FAILURE,
} from "../action/actions";

const initialState = {
  selectedCategory: null,
  selectedCategoryProducts: [],
  error: "",
};

const CategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORY_REQUEST:
      return {
        ...state,
      };
    case SET_CATEGORY_SUCCESS:
      return {
        ...state,
        selectedCategory: action.payload,
      };
    case SET_CATEGORY_FAILURE:
      return {
        selectedCategory: {},
        error: action.payload,
      };

    // case SET_CATEGORY__DATA_REQUEST:
    //   return {
    //     ...state,
    //   };
    // case SET_CATEGORY__DATA_SUCCESS:
    //   return {
    //     ...state,
    //     selectedCategoryProducts: action.payload,
    //   };
    // case SET_CATEGORY__DATA_FAILURE:
    //   return {
    //     selectedCategory: {},
    //     error: action.payload,
    //   };
    default:
      return state;
  }
};

export default CategoryReducer;
