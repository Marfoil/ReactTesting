// Filters Reducer

const filtersReducerDefaultState = {
    text: '',
};

export default (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_SEARCH_TEXT':
            return {
                ...state,
                text: action.text,
            };
        default:
            return state;
    }
};
