import Place from "../Camera/models/places";
import { ADD_PLACE } from "./places-action";

const initialstate = {
  places: [],
};

export default (state = initialstate, action) => {
  switch (action.type) {
    case ADD_PLACE:
      const newPlace = new Place(new Date().toString(), action.placeData.title);
      return {
        places: state.places.concat(newPlace),
      };
    default:
      return state;
  }
};
