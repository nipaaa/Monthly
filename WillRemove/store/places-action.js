export const ADD_PLACE = "ADD_PLACE";

export const addplace = (title) => {
  return {
    type: ADD_PLACE,
    placeData: { title: title },
  };
};
