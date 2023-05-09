const initialState = {
    cinema: []
}
const cinema = (state = initialState, action) => {
    switch (action.type) {
        case "UPLOAD_CINEMA":
            return {...state, cinema: action.payload}
        default:
            return state;
    }
}

 export default cinema;