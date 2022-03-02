const rootReducer = (state = {value: "Hello Jack", counter: 100}, action) => {
    console.log(state);
    return state;
};

export default rootReducer;