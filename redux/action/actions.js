
export const SET_CATEGORY_REQUEST = "SET_CATEGORY_REQUEST";
export const SET_CATEGORY_SUCCESS = "SET_CATEGORY_SUCCESS";
export const SET_CATEGORY_FAILURE = "SET_CATEGORY_FAILURE";

export const SET_CATEGORY_DATA_REQUEST = "SET_CATEGORY_DATA_REQUEST";
export const SET_CATEGORY_DATA_SUCCESS = "SET_CATEGORY_DATA_SUCCESS";
export const SET_CATEGORY_DATA_FAILURE = "SET_CATEGORY_DATA_FAILURE";


export const setCategoryRequest = () => ({
    type: SET_CATEGORY_REQUEST,
  });
  
  export const setCategorySuccess = (data) => ({
    type: SET_CATEGORY_SUCCESS,
    payload: data,
  });
  
  export const setCategoryFailure = (error) => ({
    type: SET_CATEGORY_FAILURE,
    payload: error,
  });


  export const setCategoryProductsRequest = () => ({
    type: SET_CATEGORY_DATA_REQUEST,
  });
  
  export const setCategoryProductsSuccess = (data) => ({
    type: SET_CATEGORY_DATA_SUCCESS,
    payload: data,
  });
  
  export const setCategoryProductsFailure = (error) => ({
    type: SET_CATEGORY_DATA_FAILURE,
    payload: error,
  });
