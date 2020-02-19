// manages meals reducer state logic
// receives two args
// current state
// the action
import { MEALS } from '../../data/dummydata';

const initialState = {

    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: []
};

const mealsReducer = (state = initialState, action) => {
    return state;
}

export default mealsReducer;